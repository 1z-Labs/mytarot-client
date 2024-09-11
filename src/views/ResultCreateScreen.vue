<template>
  <MainHeader/>
  <ResultCreate/>
  <MenuBar :currentMenu="currentMenu"/>
</template>

<script>
import ResultCreate from "@/components/Result/ResultCreate.vue";
import MainHeader from "@/components/common/MainHeader.vue";
import MenuBar from "@/components/common/MenuBar.vue";

export default {
  name: "ResultCreateScreen",
  components: {
    MainHeader,
    ResultCreate,
    MenuBar
  },
  data() {
    return {
      currentMenu: "타로"
    }
  }
}
</script>
