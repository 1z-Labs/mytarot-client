<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="header">
      <img src="@/assets/WriteInfo/close.svg" id="close" @click="close"/>
      <img src="@/assets/applogo.svg" />
      <div class="step">
        <div class="step-bar"></div>
        <div class="step-bar"></div>
        <div class="step-bar"></div>
      </div>
    </div>
    <div class="title">
      <p> 첫번째 항목 </p>
      <span>헬리님에 대한 정보를 알려주세요</span>
    </div>
    <div class="body">
<!--      <time-of-birth-input @show="toggleBottomSheet" />-->
    <TimeInput/>
      <birth-input/>
      <gender-selected-btn/>
      <button id="btn" @click="next">다음</button>
    </div>


  </div>
<!--  <bottom-sheet  v-model:show="showBottomSheet">-->

<!--  </bottom-sheet>-->
</template>

<script>

import GenderSelectedBtn from "@/components/WriteInfo/GenderSelectedBtn.vue";
import BirthInput from "@/components/WriteInfo/BirthInput.vue";
import TimeInput from "@/components/WriteInfo/TimeInput.vue";
// import TimeOfBirthInput from "@/components/WriteInfo/TimeOfBirthInput.vue";
// import BottomSheet from "@/components/common/Modal/BottomSheet.vue";


export default {
  components: {
    TimeInput,
    GenderSelectedBtn,
    BirthInput,
    // BottomSheet,
    // TimeOfBirthInput,
  },
  data(){
    return{
      showBottomSheet: false,
      now: new Date(),

      userInfo: { //localstorage 로 저장할 데이터
        'birth-time': '',
      },
    }
  },
  methods: {
    next(){
      console.log('다음 버튼 클릭');
    },
    close(){
      console.log('닫기 버튼 클릭');
    },
    toggleBottomSheet() {
      this.showBottomSheet = !this.showBottomSheet;
    },
    handleTimeUpdate(time) {
      this.userInfo['birth-time'] = time; // 자식 컴포넌트에서 전달된 시간을 객체에 저장
    },
    saveToLocalStorage() {
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo)); // localStorage에 객체 저장
      console.log('localStorage에 저장 완료:', this.userInfo);
    },

  }
}

</script>
<style scoped>
.header{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 6.2vh;
  width:100%;
  position: relative;
}
.header img{
  width: 24vw;
}
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
#btn{
  width: 85.3vw;
  height: 7.2vh;
  background-color: #1E2352;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  position: fixed;
  bottom: 16px;
}
#close{
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
}
.step{
  width: 100%;
  display: flex;
  position:absolute;
  bottom:0;
}
.step-bar{
  width: 33vw;
  height:2px;
  background-color: #1E2352;
}

</style>