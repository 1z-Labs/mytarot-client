<script>
import Paging from './ResultPaging.vue';
import AppHeader from "@/components/common/AppHeader.vue"; // 페이징 컴포넌트 불러오기

export default {
  name: "ResultAnswer",
  props:{
    chapterIndex:{
      type: String,
      required: true
    }
  },
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
      }
    },
    // 다음 챕터로 이동
    nextChapter() {
      if (this.currentChapterIndex < this.gptResults.length) {
        this.currentChapterIndex++;
      }
    },
    // 특정 챕터로 이동
    updateChapterIndex(index) {
      this.currentChapterIndex = index;
    },
    // 챕터로 이동
    goToChapter(index) {
      this.currentChapterIndex = index;
    }
  }
};
</script>



<template>
  <AppHeader/>
  <div v-if="gptResults.length > 0" class="bg-resultBg h-screen flex flex-col">
    <!-- 첫 번째 페이지: 목차 -->
    <div v-if="currentChapterIndex === 0">
      <p class="text-center text-chapterTitle font-[SUIT] text-[20px] font-bold mt-[8.8vh]">목차</p>
      <ul class="text-left ml-[8.8vw]">
        <li v-for="(result, index) in gptResults" :key="index">
          <button @click="goToChapter(index + 1)">{{ result.title }}</button>
        </li>
      </ul>
    </div>

    <!-- 2번째 페이지부터는 챕터 내용 표시 -->
    <div v-else>
      <h3>{{ gptResults[currentChapterIndex - 1].title }}</h3>
      <p>{{ gptResults[currentChapterIndex - 1].result }}</p>
    </div>


    <div class="fixed bottom-0 left-0 w-full">
      <!-- 페이징 컴포넌트 -->
      <Paging
          :current="currentChapterIndex"
          :total="gptResults.length + 1"
          @prev="prevChapter"
          @next="nextChapter"
          @update="updateChapterIndex"
      />
    </div>
  </div>
  <div v-else>
    <p>결과를 불러오는 중입니다...</p>
  </div>
</template>

