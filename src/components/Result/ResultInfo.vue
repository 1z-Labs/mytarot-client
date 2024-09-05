<script>
import {useRouter} from "vue-router";

export default {
  name: "ResultInfo",

  setup() {
    const router = useRouter()

    const handleImg = () =>{
      router.push('/resultChapter')
    }
    return {
      handleImg
    }
  }
}
</script>

<template>
  <div>
    <img src="@/assets/Result/ResultInfo.jpg" @click="handleImg">
  </div>
</template>

<style module>
* {
  padding: 0;
  margin: 0;
}
</style>