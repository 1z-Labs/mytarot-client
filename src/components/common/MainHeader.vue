<script>
export default {
  name: "MainHeader"
}
</script>

<template>
  <div class="header">
    <img src="@/assets/applogo.svg" alt='앱로고'/>
  </div>
</template>

<style scoped>
.header{
  width: 100%;
  height: 7.8vh;
  display: flex;
  align-items: center;
}
.header img{
  width: 29.2vw;
  height: 2.9vh;
  margin-left: 16px;
}
</style>