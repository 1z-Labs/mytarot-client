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

    const handleExitBtn = () =>{
      router.go(-1)
    }

    return {
      gptResults,
      handleImg,
      handleExitBtn
    };
  }
};
</script>

<template>
  <div class="relative">
    <img src="@/assets/WriteInfo/exitButton.svg" class="absolute mt-[72px] ml-4" @click="handleExitBtn"/>
    <img src="@/assets/Result/ResultInfo.jpg" @click="handleImg">
  </div>
</template>
