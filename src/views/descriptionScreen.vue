<template>
  <div class="p-5 flex flex-col gap-10">
    <!--세번째 항목 안내-->
    <div class="flex flex-col gap-3">
      <p class="font-bold text-md text-primary">세번째 항목</p>
      <p class="font-bold text-2xl">더욱 정확한 해석을 위해<br>구체적인 상황을 알려주세요</p>
    </div>

    <!--입력-->
    <div class="flex flex-col gap-3">
      <!--질문-->
      <div class="flex gap-2">
        <p class="font-semibold text-primary text-lg">Q.</p>
        <p class="font-bold text-lg">어떻게 헤어지게 되셨나요?</p>
      </div>
      <textarea
          class="h-32 p-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary resize-none"
          placeholder="내용을 입력해주세요."
          maxlength="100"
          v-model="inputText"
      ></textarea>
      <!-- 글자수 표시 -->
      <p class="text-right text-sm text-gray-500">{{ inputText.length }}/100</p>
    </div>

    <button class="fixed bottom-0 left-0 right-0 bg-primary text-white text-lg font-bold rounded-lg m-4 p-4" @click="handleButtonClick">완료</button>
  </div>
</template>

<script>
export default {
  name: "descriptionScreen",
  methods: {
    handleButtonClick() {
      console.log('버튼 클릭!');
    }
  },
  data() {
    return {
      inputText: "", // 사용자가 입력한 텍스트를 저장
    };
  },
}
</script>

<style scoped>
.step-bar {
  width: 33%;
  height: 2px;
  background-color: #1E2352; /* primary 컬러 */
}
</style>
