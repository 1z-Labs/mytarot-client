<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
@font-face {
  font-family: 'SUIT-Regular';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'SUIT-Regular';
  font-size: 14px;
  line-height: 16.8px;
}
html,
body{
  width: 100vw;
  height: 100vh;
}
</style>
