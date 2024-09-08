<script>
import Paging from './ResultPaging.vue';
import AppHeader from "@/components/common/AppHeader.vue"; // 페이징 컴포넌트 불러오기

export default {
  name: "ResultAnswer",
  components: {
    AppHeader,
    Paging
  },
  data() {
    return {
      gptResults: [],  // GPT 결과를 저장할 배열
      currentChapterIndex: 0  // 현재 챕터의 인덱스 (0은 목차 페이지)
    };
  },
  watch: {
    // URL 파라미터로부터 chapterIndex 동기화
    '$route.params.chapterIndex': {
      immediate: true,
      handler(newIndex) {
        this.currentChapterIndex = parseInt(newIndex, 10) || 0;
      }
    }
  },
  mounted() {
    // localStorage에서 GPT 결과 가져오기
    const storedResults = localStorage.getItem('gptResults');
    if (storedResults) {
      try {
        this.gptResults = JSON.parse(storedResults);
      } catch (error) {
        console.error('Error parsing storedResults:', error);
      }
    }
  },
  methods: {
    // 이전 챕터로 이동
    prevChapter() {
      if (this.currentChapterIndex > 0) {
        this.currentChapterIndex--;
        this.updateRoute();
      }
    },
    // 다음 챕터로 이동
    nextChapter() {
      if (this.currentChapterIndex < this.gptResults.length * 2) {
        this.currentChapterIndex++;
        this.updateRoute();
      }
    },
    // 특정 챕터로 이동
    goToChapter(index) {
      this.currentChapterIndex = index * 2 - 1;
      this.updateRoute();
    },
    // URL을 업데이트하여 경로를 동기화
    updateRoute() {
      this.$router.push({path: `/resultChapter/${this.currentChapterIndex}`});
    }
  }
};
</script>

<template>
  <AppHeader/>
  <div v-if="gptResults.length > 0" class="bg-resultBg h-screen flex flex-col">
    <!-- 첫 번째 페이지: 목차 -->
    <div v-if="currentChapterIndex === 0">
      <p class="text-center text-chapterTitle font-[SUIT] text-[20px] font-bold mt-[8.8vh] mb-7">목차</p>
      <ul class="text-left ml-[8.8vw]">
        <li v-for="(result, index) in gptResults" :key="index" class="text-[16px] mt-5">
          <img src="@/assets/Result/seprateHr.svg" class="w-[87.2vw]"/>
          <p class="text-[#999999] text-[12px] mt-5 ml-4">Chapter {{ index + 1 }}</p>
          <button @click="goToChapter(index + 1)" class="ml-4">{{ result.title }}</button>
        </li>
        <img src="@/assets/Result/seprateHr.svg" class="mt-5"/>
      </ul>
    </div>

    <!-- 2번째 페이지부터는 챕터 제목 또는 내용 표시 -->
    <div v-else class="relative justify-center flex">
      <!-- 챕터와 제목 모두 표시 (홀수, 짝수 페이지 동일) -->
      <div class="absolute p-8 text-center">
        <p> Chapter {{ Math.ceil(currentChapterIndex / 2) }} </p> <!-- 챕터 번호 표시 -->
        <h3 class="text-xl mb-4">{{ gptResults[Math.floor((currentChapterIndex - 1) / 2)].title }}</h3> <!-- 제목 표시 -->

        <!-- 짝수 페이지: 결과도 표시 -->
        <p v-if="currentChapterIndex % 2 === 0">{{ gptResults[(currentChapterIndex / 2) - 1].result }}</p>
      </div>

      <!-- 배경 이미지 -->
      <img src="@/assets/Result/ResultBackground.svg" class="h-auto w-full"/>
    </div>

    <!-- 페이징 컴포넌트 -->
    <div class="fixed bottom-0 left-0 w-full">
      <Paging
          :current="currentChapterIndex"
          :total="gptResults.length * 2 + 1"
          @prev="prevChapter"
          @next="nextChapter"
          @update="updateChapterIndex"
      />
    </div>
  </div>

  <!-- 결과가 없을 때 -->
  <div v-else>
    <p>결과를 불러오는 중입니다...</p>
  </div>
</template>
