<script>
import { useRouter } from 'vue-router';

export default {
  name: "ResultInfo",
  setup() {
    const router = useRouter();

    // localStorage에서 GPT 결과 읽기
    const gptResults = JSON.parse(localStorage.getItem('gptResults') || '[]');

    const handleImg = () => {
      router.push({ path: '/resultChapter/0' });
    };

    return {
      gptResults,
      handleImg,
    };
  }
};
</script>

<template>
  <div>
    <img src="@/assets/Result/ResultInfo.jpg" @click="handleImg">
  </div>
</template>
