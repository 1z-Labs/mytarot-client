<template>
  <div id="blind" v-if="show">
    <div class=" container" v-if="show" :style="{ height: height + 'vh' }">
      <div class=" body">
        <strong>{{ title }}</strong>
        <!--        TODO: 줄바꿈 처리 어떻게 할 건지?-->
        <div v-html="bodyText"></div>
      </div>
      <div class=" footer">
        <button id="btn" @click="showAlert">{{btnText}}</button>
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
    btnText : {
      type: String,
      default : "확인"
    },
    title : String,
    bodyText : String,
    ok: {
      type: Function,
    },
  },
  methods:{
    showAlert(){
      this.$emit('update:show', false);
    }
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
  margin: 5.6vh 4vw 0px 4vw;
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
#btn{
  width: 85.3vw;
  height: 5.4vh;
  background-color: #1E2352;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: white;
}
.blue_acc{

}

</style>
