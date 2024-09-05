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
  <div>
    <img src="@/assets/backBtn.svg" @click="handleBack">
  </div>
</template>