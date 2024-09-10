<script>
import Paging from './ResultPaging.vue';
import AppHeader from "@/components/common/AppHeader.vue";
import MyResult from "@/components/Result/MyResult.vue";
export default {
  name: "ResultAnswer",
  components: {
    AppHeader,
    Paging,
    MyResult  // 컴포넌트 등록
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
  <div v-if="gptResults.length > 0" class="absolute bg-resultBg h-screen w-full flex flex-col">
    <!-- 첫 번째 페이지: 목차 -->
    <div v-if="currentChapterIndex === 0">
      <!-- 목차 내용 -->
      <div v-if="currentChapterIndex === 0">
        <p class="text-center text-chapterTitle font-[SUIT] text-[20px] font-bold mt-[8.8vh] mb-7">목차</p>
        <ul class="text-left ml-[8.8vw]">
          <li v-for="(result, index) in gptResults" :key="index" class="text-[16px] mt-5">
            <img src="@/assets/Result/seprateHr.svg" class="w-[87.2vw]"/>
            <p class="text-[#999999] text-[12px] mt-5 ml-4">Chapter {{ index + 1 }}</p>
            <button @click="goToChapter(index + 1)" class="ml-4">{{ result.title }}</button>
          </li>
          <img src="@/assets/Result/seprateHr.svg" class="w-[87.2vw] mt-5"/>
        </ul>
      </div>
    </div>

    <!-- 두 번째 페이지에서 MyResult 컴포넌트 렌더링 -->
    <div v-else-if="currentChapterIndex === 2" class="flex flex-col items-center justify-center">
      <MyResult/>
    </div>

    <!-- 챕터와 제목, 결과 표시 -->
    <div v-else class="relative flex flex-col items-center justify-start result-container">
      <!-- 이미지가 들어갈 부분 (짝수 페이지에서만 표시) -->
      <div v-if="currentChapterIndex % 2 === 0" class="chapter-image-container">
        <img src="@/assets/Result/flower.svg" class="mt-[9.3vh]"/>
      </div>

      <!-- 챕터 번호 및 제목 -->
      <p :class="currentChapterIndex % 2 === 1 ? 'chapter-odd' : 'chapter-even'">
        Chapter {{ Math.ceil(currentChapterIndex / 2) }}
      </p>
      <h3 :class="currentChapterIndex % 2 === 1 ? 'title-odd' : 'title-even'">
        {{ gptResults[Math.floor((currentChapterIndex - 1) / 2)].title }}
      </h3>

      <!-- 짝수 페이지의 결과 표시 -->
      <div v-if="currentChapterIndex % 2 === 0" class="relative even-result-container">
        <!-- 결과 텍스트 -->
        <p class="even-result">
          {{ gptResults[(currentChapterIndex / 2) - 1].result }}
        </p>

        <!-- 하단 그라데이션 -->
        <div class="gradient-bottom"></div>
      </div>
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


<style scoped>
.result-container {
  background-image: url('@/assets/Result/ResultBackground.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  min-height: 100vh;
}

/* 챕터 번호에 대한 스타일 */
.chapter-odd,
.chapter-even {
  font-family: SUIT;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  color: #555;
  margin-top: 35vh;
}

.chapter-even {
  margin-top: 4px;
}

.title-odd,
.title-even {
  font-family: 'KimjungchulMyungjo';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 16px;
}

.title-odd {
  margin-top: 8px;
  font-size: 20px;
  color: #121212;
}

.title-even {
  margin-top: 8px;
  margin-bottom: 5vh;
}

.even-result-container {
  position: relative;
  width: 87.3vw;
  margin-bottom: 20vh;
}

.even-result {
  font-family: 'KimjungchulMyungjo';
  line-height: 26px;
  letter-spacing: -0.32px;
  margin-bottom: 5vh;
}

</style>

