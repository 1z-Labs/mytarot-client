<script>
export default {
  name: "ResultChapter",
  data() {
    return {
      gptResults: []  // 데이터 초기화
    };
  },
  mounted() {
    // localStorage에서 GPT 결과 가져오기
    const storedResults = localStorage.getItem('gptResults');
    console.log(storedResults);

    // JSON.parse 에러 핸들링
    try {
      if (storedResults) {
        this.gptResults = JSON.parse(storedResults);
        console.log('Parsed Results in mounted:', this.gptResults);
      }
    } catch (error) {
      console.error('Error parsing storedResults:', error);
    }
  }
};
</script>

<template>
  <div v-if="gptResults.length > 0">
    <ul>
      <li v-for="(result, index) in gptResults" :key="index">
        <h3>{{ result.title }}</h3>
        <p>{{ result.result }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>결과를 불러오는 중입니다...</p>
  </div>
</template>
