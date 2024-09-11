<template>
  <div id="blind" v-if="show">
    <div class=" container" v-if="show" :style="{ height: height + 'vh' }">
      <div class=" body">
        <strong>{{ title }}</strong>
        <div v-html="bodyText" class="body_text"></div>
      </div>
      <div class=" footer">
        <button class="btn no" @click="handleNo">{{btn1}}</button>
        <button class="btn yes " @click="handleYes">{{btn2}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props : {
    show: {
      type:Boolean,
      default: false,
    },
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
  emits: ['update:show'],
  methods:{
    handleNo() {
      this.$emit('update:show', false);
      this.FuncNo();
    },
    handleYes() {
      this.$emit('update:show', false);
      this.FuncYes();
    },
  },

}
</script>
<style scoped>
*{
  box-sizing: border-box;
}
#blind{
  position: fixed;
  top:0;
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
  margin: 5.6vh 6.5vw 0px 6.5vw;
}
.body_text{
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: center;
  color: #555555;
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
  padding: 10px 15px 1.9vh 15px;
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
