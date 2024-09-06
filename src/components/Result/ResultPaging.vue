<script>
export default {
  name: "ResultPaging",
  props: {
    current: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    // 이전 페이지로 이동
    prev() {
      if (this.current > 0) {
        this.$emit('prev');
      }
    },
    // 다음 페이지로 이동
    next() {
      if (this.current < this.total - 1) {
        this.$emit('next');
      }
    },
    // 특정 페이지로 이동
    goToPage(index) {
      this.$emit('update', index);
    }
  }
};
</script>

<template>
  <div class="flex justify-between items-center w-full h-[60px] bg-gray-100">
    <div class="m-4 flex">
      <img src="@/assets/Result/chapterList.svg" alt="chapterList" class="mr-1"/>
      <p>{{ current + 1 }} / {{ total }}</p>
    </div>

    <div class="flex items-center">
      <button @click="prev" :disabled="current === 0">
        <img src="@/assets/Result/prevBtn.svg" alt="prevBtn"/>
      </button>
      <p class="text-gray-300 mx-2">|</p>
      <button @click="next" :disabled="current === total - 1">
        <img src="@/assets/Result/nextBtn.svg" alt="nextBtn"/>
      </button>
    </div>
  </div>
</template>

