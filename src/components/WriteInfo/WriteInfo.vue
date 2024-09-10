<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title">
      <p> 첫번째 항목 </p>
      <span>헬리님에 대한 정보를 알려주세요</span>
    </div>
    <div class="body">
    <TimeInput/>
      <birth-input/>
      <gender-selected-btn/>
    </div>
  </div>
</template>

<script>
import GenderSelectedBtn from "@/components/WriteInfo/GenderSelectedBtn.vue";
import BirthInput from "@/components/WriteInfo/BirthInput.vue";
import TimeInput from "@/components/WriteInfo/TimeInput.vue";

export default {
  components: {
    TimeInput,
    GenderSelectedBtn,
    BirthInput,
  },
  data(){
    return{
      showBottomSheet: false,
      now: new Date(),

      userInfo: {
        birthday: null,
        birthtime: null,
        gender: "여성"
      },
    }
  },
  //TODO: 사용자 정보를 전역으로 관리

}

</script>
<style scoped>
.body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 28px;
}
.title{
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 85.3vw;
}
.title > p{
  font-size: 14px;
  font-weight: 700;
  margin-bottom:8px;
}
.title > span{
  font-size: 24px;
  font-weight: 700;
}
</style>