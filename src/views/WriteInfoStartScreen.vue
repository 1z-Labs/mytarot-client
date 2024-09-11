<template>
  <div class="con">
    <div class="body">
      <img src="@/assets/WriteInfo/exitButton.svg" @click="goBack" alt=""/>
    </div>
    <div class="footer">
      <button @click="start">시작하기</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    goBack() {
      this.$router.go(-1)
    },
    start(){
      this.$router.push('/writeInfo/0')
    }
  }
}
</script>
<style scoped>
.con{
  width: 100vw;
  height: 100vh;
}
.body{
  width:100%;
  height: 100%;
  position:relative;
  background: url("@/assets/WriteInfo/background.png") no-repeat;
}
img{
  position: absolute;
  top: 20px;
  left: 16px;
}
.footer{
  width: 100%;
  height: 7.3vh;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
button{
  position: absolute;
  background-color: #1E2352;
  width: calc(100% - 48px);
  height: 5.4vh;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: white;
}

</style>
