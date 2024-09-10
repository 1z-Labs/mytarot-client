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
      switch (chapterTitle) {
        case "나의 사주명식":
          prompt = `
            챕터 제목: ${chapterTitle}
          `;
          break;
        case "이성이 보는 나의 매력과 분위기":
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
          break;

        case "연애운이 들어오는 3번의 시기":
          prompt = `
            챕터 제목: ${chapterTitle}

            사용자 사주:
            - 년도: ${userSaju.year}
            - 월: ${userSaju.month}
            - 일: ${userSaju.day}
            - 시간: ${userSaju.time}

            이 사용자가 앞으로 3번의 중요한 연애 시기를 맞이할 것입니다. 그 시기는 언제이며, 어떤 특징을 가질지 500자 이내로 설명해 주세요.
          `;
          break;

        case "연애운을 연애 골든타임으로!":
          prompt = `
            챕터 제목: ${chapterTitle}

            사용자 사주:
            - 년도: ${userSaju.year}
            - 월: ${userSaju.month}
            - 일: ${userSaju.day}
            - 시간: ${userSaju.time}

            연애운이 들어오는 시기에 어떻게 하면 연애를 성공할 수 있을지 500자 이내로 설명해줘.
          `;
          break;

        case "그 사람의 마음을 사로잡는 비법":
          prompt = `
            챕터 제목: ${chapterTitle}

            상대방 사주:
            - 년도: ${pSaju.year}
            - 월: ${pSaju.month}
            - 일: ${pSaju.day}
            - 시간: ${pSaju.time}

          상대방의 사주를 바탕으로 그 사람의 마음을 사로잡는 방법에 대한 조언을 해주세요. 상대방의 성격, 관심사, 사랑하는 방식 등과 관련된 정보도 알려주시면 좋겠습니다. 이 사주를 기반으로 관계를 발전시킬 수 있는 구체적인 조언을 500자 이내로 부탁드립니다.
          `;
          break;

        case "마지막으로 도화가 정하는 말":
          prompt = `
            챕터 제목: ${chapterTitle}

            상대방 사주:
            - 년도: ${pSaju.year}
            - 월: ${pSaju.month}
            - 일: ${pSaju.day}
            - 시간: ${pSaju.time}

            지금까지 나왔던 답변들을 최종적으로 요약해서 잘 될거다라는 좋은 말을 500자 이내로 작성해주세요.

          `;
          break;

        default:
          console.error("알 수 없는 챕터 제목:", chapterTitle);
          prompt = "유효하지 않은 챕터 제목입니다.";
      }

      try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-4",
              messages: [{role: "user", content: prompt}],
              max_tokens: 700,
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
          axios.get(`http://34.64.230.160:3001/my_infos/1/user_saju`),
          axios.get(`http://34.64.230.160:3001/my_infos/1/p_saju`),
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
        {id: 1, title: "나의 사주명식"},
        {id: 2, title: "이성이 보는 나의 매력과 분위기"},
        {id: 3, title: "연애운이 들어오는 3번의 시기"},
        {id: 4, title: "연애운을 연애 골든타임으로!"},
        {id: 5, title: "그 사람의 마음을 사로잡는 비법"},
        {id: 6, title: "마지막으로 도화가 정하는 말"}
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

  <div class=" flex text-center justify-center relative mt-2">
    <div class="wrapContent w-[93vw] h-[18vh] rounded-xl">
      <button @click="createResults" :disabled="loading"
              class="absolute mt-6 ml-28 bg-[#4768A8] flex text-white font-medium py-2 px-5 rounded-3xl disabled:bg-gray-400 disabled:cursor-not-allowed">
        <span v-if="!loading">해석하기</span>
        <svg v-else class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.937l3-2.646z"></path>
        </svg>
      </button>
      <img src="@/assets/Result/ResultCreate.jpg" class="h-[12vh] m-5 mt-6 absolute"/>
      <p class="title text-[15px] text-gray-600 text-left m-[62px] ml-28">그 사람도 좋아할까? <br> 짝사랑이 이뤄지는 사주비책</p>
    </div>
  </div>
</template>


<style>
.title{
  line-height: 140%;
}

.wrapContent{
  border: 0.5px solid #CCCCCC;
  box-shadow: 0px 1px 3px #D9D9D9;
}
</style>