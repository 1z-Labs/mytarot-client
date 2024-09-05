<template>
  <div id="blind" v-if="show">
    <!--    TODO: height 동적으로 어떻게 줄 건지?-->
    <div class=" container" v-if="show" :style="{ height: height + 'vh' }">
      <div class=" body">
        <strong>{{"정말 나가시겠어요?"}}</strong>
        <!--        TODO: 줄바꿈 처리 어떻게 할 건지?-->
        <pre>{{"나가셔도 입력하신 정보가 저장되지 않아요.작성을 계속하시려면 이어서하기를 클릭해주세요."}}</pre>
      </div>
      <div class=" footer">
        <button class="btn no" @click="showAlert(), FuncNo()">{{btn1}}</button>
        <button class="btn yes " @click="showAlert(), FuncYes()">{{btn2}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props : {
    height: Number,
    btn1 : String,
    btn2  : String,
    title : String,
    bodyText : String,
    FuncNo: {
      type: Function,
      default : () => console.log("취소")
    },
    FuncYes: {
      type: Function,
      default : () => console.log("확인")
    },
  },
  data(){
    return{
      show: true,
    }
  },
  methods:{
    showAlert(){
      this.show = false;
    }
  },
  computed: {
    formattedBodyText() {
      return this.bodyText.replace(/\n/g, '<br>'); // 줄바꿈 처리를 위해 <br> 태그 추가
    },
  },
}
</script>
<style scoped>
*{
  box-sizing: border-box;
}
#blind{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2121214D;
}
.container{
  width: 85.3vw;
  height: 25.6vh;
  background-color: #FFFFFF;
  border-radius: 16px;
  border : 1px solid #D9D9D9;
  position: relative;
}
.body{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  margin: 46px 24.5px 0px 24.5px;
}
strong{
  font-size: 20px;
  font-weight: 700;
}
p{
  font-size: 14px;
  font-weight: 400;
  max-width: 72.1vw;
  color:#555555;
}
.footer{
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 15px 16px 15px;
}
.btn{
  width: 37vw;
  height: 5.4vh;
  border-radius: 8px;
  border: none;
}
.no{
  background-color: #D9D9D9;
  color:#333333;
}
.yes{
  background-color: #1E2352;
  color: #FFFFFF;
}
</style>
