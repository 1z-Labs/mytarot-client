<script>
import axios from "axios";

export default {
  name: "ResultCreate",
  data() {
    return {
      gptResults: [],  // GPT 결과 저장
      loading: false,  // 로딩 상태 관리
    };
  },
  methods: {
    // GPT API 요청을 처리하는 함수
    async fetchGPTResults(userSaju, pSaju, chapters) {
      for (const chapter of chapters) {
        const result = await this.fetchGPTResult(chapter.title, userSaju, pSaju);
        this.gptResults.push({title: chapter.title, result});
      }
    },

    // GPT API로 요청하는 함수
    async fetchGPTResult(chapterTitle, userSaju, pSaju) {
      let prompt = "";

      // GPT 요청에 사용할 프롬프트 구성
      if (chapterTitle === "이성이 보는 나의 매력과 분위기") {
        prompt = `
          챕터 제목: ${chapterTitle}

          사용자 사주:
          - 년도: ${userSaju.year}
          - 월: ${userSaju.month}
          - 일: ${userSaju.day}
          - 시간: ${userSaju.time}

          상대방 사주:
          - 년도: ${pSaju.year}
          - 월: ${pSaju.month}
          - 일: ${pSaju.day}
          - 시간: ${pSaju.time}

          상대방이 보는 사용자의 매력과 분위기를 설명해 주세요.
        `;
      } else if (chapterTitle === "연애운이 들어오는 3번의 시기") {
        prompt = `
          챕터 제목: ${chapterTitle}

          사용자 사주:
          - 년도: ${userSaju.year}
          - 월: ${userSaju.month}
          - 일: ${userSaju.day}
          - 시간: ${userSaju.time}

          이 사용자가 앞으로 3번의 중요한 연애 시기를 맞이할 것입니다. 그 시기는 언제이며, 어떤 특징을 가질지 설명해 주세요.
        `;
      }

      try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-4",
              messages: [{role: "user", content: prompt}],
              max_tokens: 1000,
              temperature: 0.7,
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`,
                "Content-Type": "application/json",
              }
            }
        );
        return response.data.choices[0].message.content.trim();
      } catch (error) {
        console.error("GPT 요청 실패:", error);
        return "데이터를 불러오는 데 실패했습니다.";
      }
    },

    // 사주 정보를 가져오는 함수
    async fetchSajuData() {
      try {
        const [userSajuResponse, pSajuResponse] = await Promise.all([
          axios.get(`http://localhost:3000/my_infos/1/user_saju`),
          axios.get(`http://localhost:3000/my_infos/1/p_saju`),
        ]);
        return {
          userSaju: userSajuResponse.data.user_saju,
          pSaju: pSajuResponse.data.p_saju,
        };
      } catch (error) {
        console.error("사주 정보를 불러오는 데 실패했습니다:", error);
        return null;
      }
    },

    // GPT 요청 후 결과를 가져오는 메인 함수
    async createResults() {
      this.loading = true;  // 로딩 상태 시작
      const sajuData = await this.fetchSajuData();
      if (!sajuData) {
        this.loading = false;
        return;
      }

      const chapters = [
        {id: 2, title: "이성이 보는 나의 매력과 분위기"},
        {id: 3, title: "연애운이 들어오는 3번의 시기"},
      ];

      await this.fetchGPTResults(sajuData.userSaju, sajuData.pSaju, chapters);

      // GPT 결과를 localStorage에 저장
      localStorage.setItem('gptResults', JSON.stringify(this.gptResults));

      // 결과 저장 후 ResultInfo로 이동
      this.$router.push({path: '/resultInfo'});

      this.loading = false;  // 로딩 상태 종료
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <!-- 로고 이미지 -->
    <div class="mb-5">
      <img src="@/assets/applogo.svg" class="w-36"/> <!-- Tailwind로 크기 조정 -->
    </div>

    <!-- 버튼 (결과 생성하기 or 로딩 중) -->
    <button @click="createResults" :disabled="loading"
            class="bg-green-500 text-white font-medium py-2 px-6 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed">
      <span v-if="!loading">결과 생성하기</span>
      <svg v-else class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.937l3-2.646z"></path>
      </svg>
    </button>
  </div>
</template>
