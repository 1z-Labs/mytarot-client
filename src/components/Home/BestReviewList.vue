<template>
  <div class="con">
    <div class="header">
      <h1>💯 200개 이상의 후기가 증명👍</h1>
    </div>
    <div class="body">
      <img :src="item.image" v-for="(item, idx) in reviewList" :key="idx" alt="사주콘텐츠" @click="go(idx)"/>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      clickedContent: null,
      reviewList: [
        {
          image: require(`@/assets/Home/lank/126_thumbnail.jpg`),
        },
        {
          image: require(`@/assets/Home/lank/128_thumbnail.jpg`),
        },
        {
          image: require(`@/assets/Home/lank/6_thumbnail_2.jpg`),
        },
        {
          image: require(`@/assets/Home/lank/126_thumbnail.jpg`),
        },
        {
          image: require(`@/assets/Home/lank/16_thumbnail.jpg`),
        },

      ],
    }
  },
  methods:{
    go(idx){
      this.clickedContent = idx;
      this.updateRoute()
    },
    updateRoute() {
      this.$router.push({path: `/contentsDetail/${this.clickedContent}`});
    },
  }
}
</script>
<style scoped>
.con{
  margin-top: 40px;
  margin-bottom: 28px;
  padding: 0 12px;
  box-sizing: border-box;
  height: 29.3vh;
}
.header{
  width: 100%;
  height: 5.9vh;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  box-sizing: border-box;
}
.body{
  width: 100%;
  display: flex;
  gap: 8px;
  overflow-x: scroll;
}
.body::-webkit-scrollbar {
  display: none;
}
img{
  width: 33.6vw;
  height: 21.6vh;
  border-radius: 6px;
}
</style>