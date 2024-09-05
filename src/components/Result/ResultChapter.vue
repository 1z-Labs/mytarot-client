<script>
import AppHeader from "@/components/common/AppHeader.vue";
export default {
  name: "ResultChapter",
  components: {AppHeader},

}
</script>

<template>
  <AppHeader/>
  <div class="h-screen bg-resultBg flex justify-center">
    <p class=" text-center text-[20px] font-bold leading-normal font-suit text-chapterTitle mt-16">목차</p>

    <div>
      <img src="@/assets/Result/seprateHr.svg"/>
    </div>
  </div>
</template>