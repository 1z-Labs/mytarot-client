<script>
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "AppHeader",

  setup() {
    const router = useRouter();

    const handleBack = () => {
      router.go(-1)
    }
    return {
      handleBack
    }
  }
})
</script>

<template>
  <div class="flex w-screen h-[5.4vh] px-[5vw] py-[1vh] justify-between items-center flex-shrink-0 bg-gray-100">
    <img src="@/assets/backBtn.svg" @click="handleBack">
  </div>
</template>