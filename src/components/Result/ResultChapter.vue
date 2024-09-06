<script>
import AppHeader from "@/components/common/AppHeader.vue";
import { defineComponent } from "vue";
import axios from "axios";

// GPT API를 이용한 챕터별 결과 가져오기
const fetchGPTResult = async (chapterTitle, userSaju, pSaju) => {
  const prompt = `
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

     사주는 동양의 전통적인 명리학에 기초하여 개인의 성향과 운명을 분석하는 방법입니다. 두 사람의 사주를 비교하여 궁합을 분석하고, 다음과 같은 형식으로 결과를 제공해 주세요:
    사용자의 매력과 분위기를 상대방이 어떻게 인식할지 설명해주세요. 상대방의 사주를 바탕으로 한 시각에서 사용자의 매력과 성향을 분석하고, 긍정적인 면과 부정적인 면을 포함해 주세요. 500글자 이내로 설명해주세요
    그리고 json형태로 반환해주세요
  `;

  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
      temperature: 0.7
    }, {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("GPT 요청 실패:", error);
    return "데이터를 불러오는 데 실패했습니다.";
  }
};

export default defineComponent({
  name: "ResultChapter",
  components: { AppHeader },

  data() {
    return {
      chapters: [
        { id: 2, title: "이성이 보는 나의 매력과 분위기" },
        // 추가적인 챕터들을 필요에 따라 추가할 수 있습니다.
      ],
      currentChapter: null,
      userSaju: null,
      pSaju: null,
      gptResult: null,
      error: null,
    };
  },

  methods: {
    // 사용자 사주 및 상대방 사주 정보 가져오기
    async fetchData() {
      try {
        const [userSajuResponse, pSajuResponse] = await Promise.all([
          axios.get(`http://localhost:3000/my_infos/1/user_saju`),
          axios.get(`http://localhost:3000/my_infos/1/p_saju`)
        ]);

        this.userSaju = userSajuResponse.data.user_saju;
        this.pSaju = pSajuResponse.data.p_saju;
      } catch (error) {
        console.error("사주 데이터를 불러오는 데 실패했습니다:", error);
        this.error = "사주 데이터를 불러오는 데 실패했습니다.";
      }
    },

    // 챕터 선택 시 GPT로부터 결과 가져오기
    async fetchChapterResult(chapter) {
      this.currentChapter = chapter;
      if (!this.userSaju || !this.pSaju) {
        this.error = "사주 정보를 불러오는 중 오류가 발생했습니다.";
        return;
      }

      try {
        this.gptResult = await fetchGPTResult(chapter.title, this.userSaju, this.pSaju);
      } catch (error) {
        this.error = "결과를 불러오는 데 실패했습니다.";
      }
    },

    goBackToChapters() {
      this.currentChapter = null;
      this.gptResult = null;
      this.error = null;
    }
  },

  mounted() {
    this.fetchData();
  }
});
</script>

<template>
  <AppHeader />
  <div class="h-screen bg-resultBg flex justify-center">
    <p class="text-center text-[20px] font-bold leading-normal font-suit text-chapterTitle mt-16">목차</p>

    <div v-if="error" class="mt-4 text-center text-red-500">
      <p>{{ error }}</p>
    </div>

    <div v-else>
      <div v-if="currentChapter" class="text-center mt-4">
        <h2>{{ currentChapter.title }}</h2>
        <p v-if="gptResult">{{ gptResult }}</p>
        <p v-else>결과를 불러오는 중입니다...</p>
        <button @click="goBackToChapters" class="mt-4">목차로 돌아가기</button>
      </div>

      <div v-else>
        <!-- 챕터 목록 화면 -->
        <ul class="mt-4">
          <li v-for="chapter in chapters" :key="chapter.id" class="my-2">
            <button @click="fetchChapterResult(chapter)" class="block w-full text-center">
              {{ chapter.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
