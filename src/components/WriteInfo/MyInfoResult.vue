<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title">
      <p> 첫번째 항목 </p>
      <span>헬리님의 정보를 확인해주세요</span>
    </div>
    <div class="body">
      <div class="info-box" >
        <div class="info" v-for="(info, idx) in userInfo" :key="idx">
          {{info}}
        </div>
      </div>

      <div class="horoscope">
        <span>생년월일시에 따른 사주명식</span>
        <horoscope-table/>
        <button @click="showAlert = true"><img src="@/assets/WriteInfo/help.svg" alt="도움버튼">알고 계신 사주간지와 다른가요? </button>
      </div>
    </div>
  </div>
  <basic-alert v-model:show="showAlert" :title="'사주명식 계산안내'" :height=45.3 :bodyText="alertText"/>
  <basic-confirm v-model:show="showConfirm" :title="'정말 나가시겠어요?'" :height=25.6 :bodyText="confirmText"
  :btn1="'나가기'" :btn2="'이어서하기'" :FuncNo="FunctionNo" :FuncYes="FunctionYes"/>

</template>

<script>

import HoroscopeTable from "@/components/WriteInfo/HoroscopeTable.vue";
import BasicAlert from "@/components/common/Modal/BasicAlert.vue";
import BasicConfirm from "@/components/common/Modal/BasicConfirm.vue";

export default {
  components: {
    BasicConfirm,
    BasicAlert,
    HoroscopeTable
  },

  data(){
    return{
      showAlert: false,
      showConfirm: false,
      userInfo: {
        gender : '여성',
        birthday: '2005년 06월 24일',
        birthtime: '오후 12시 50분',
      },
      alertText:`<div style="font-size:16px; font-weight:400; color:#555555; line-height: 19.2px;">
        마이타로 콘텐츠 해석에 사용되는 만세력은<b style="font-size: 16px; font-weight: 700;">입력하신 양력 생년월일시를 음력으로 변환하고 써머타임 보정 및 1920년 이후의 절기의 시작일을 데이터화</b>
        한 내용을 바탕으로 사주명식을 계산하고 있습니다.<br/><br/>알고계시는 사주명식과 다르게 계산되어 나오는 것은 <span style="font-size: 16px;
  font-weight: 700; color:#4975E5;"> 마이타로 만세력의 독자적인 해석 방식</span> 때문이며 고객님께서 잘못 입력하시거나 <span style="font-size: 16px;
  font-weight: 700;color:#4975E5;">틀린 해석이 출력되는 것은 아닙니다.</span>
      </div>`,
      confirmText: `나가셔도 입력하신 정보가 저장되지 않아요<br/>작성을 계속하시려면 이어서하기를 클릭해주세요`
    }
  },
  methods: {
    next(){
      console.log('다음 버튼 클릭');
    },
    cancle(){
      console.log('이전 버튼 클릭');
    },
    FunctionNo(){
      console.log('나가기 버튼 클릭');
    },
    FunctionYes(){
      console.log('이어서하기 버튼 클릭');
    },
  }
}

</script>
<style scoped>
.body{
  width: 100%;
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
.title> p{
  font-size: 14px;
  font-weight: 700;
  margin-bottom:8px;
}
.title > span{
  font-size: 24px;
  font-weight: 700;
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
.info-box{
  width: 85.3vw;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}
.info{
  width: fit-content;
  background-color: #F5F5F5;
  padding: 8px 18px 8px 18px;
  border-radius: 8px;
}
.horoscope{
  margin-top: 40px;
}
.horoscope > span{
  display: block;
  font-size: 18px;
  font-weight: 700;
  width:100%;
  margin-bottom: 12px;
}
.horoscope  button{
  width: 58.6vw;
  height: 4.1vh;
  background-color: #F5F5F5;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  color: #1E2352;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
}

</style>