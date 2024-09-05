<template>
  <div>
    <div class="header">
      <img src="@/assets/applogo.svg" />
      <div :class="$style.step">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div :class="$style.body">
      <div :class="$style.title">
        <p> 첫번째 항목 </p>
        <span>헬리님에 대한 정보를 알려주세요</span>
      </div>
      <birth-input/>
      <gender-selected-btn/>
      <button id="btn" @click="next">다음</button>
    </div>
  </div>
</template>

<script>

import GenderSelectedBtn from "@/components/WriteInfo/GenderSelectedBtn.vue";
import BirthInput from "@/components/WriteInfo/BirthInput.vue";
export default {
  components: {
    GenderSelectedBtn,
    BirthInput
  },
  methods: {
    next(){
      console.log('다음 버튼 클릭');
    }
  }
}

</script>
<style module>
.header{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 5.4vh;
}
.header img{
  width: 24vw;
}
.body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 0 20px;
}
.title{
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
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