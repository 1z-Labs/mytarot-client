<template>
  <div class="con">
    <div class="header">
      <h1>❤️ 솔로탈출 BEST 💗</h1>
      <img src="@/assets/Home/detail_arrow.svg" alt="상세페이지보기 버튼" @click="this.$router.push({path: `/categoryDetail/${this.category}`});"/>
    </div>
    <div class="body">
      <img src="@/assets/Home/lank/6_thumbnail_2.jpg"  alt="사주콘텐츠" @click="go(idx)"/>
      <img src="@/assets/Home/lank/249_thumbnail.jpg"  alt="사주콘텐츠" @click="go(idx)"/>
      <img src="@/assets/Home/lank/40_thumbnail.jpg"  alt="사주콘텐츠" @click="go(idx)"/>
      <img src="@/assets/Home/lank/217_thumbnail.jpg"  alt="사주콘텐츠" @click="go(idx)"/>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      category : '솔로탈출',
      clickedContent: null,
    }
  },
  methods:{
    go(idx){
      this.clickedContent = idx;
      this.updateRoute()
    },
    updateRoute() {
      this.$router.push({path: `/contentsDetail/`});
    },
  }
}

</script>
<style scoped>
.con{
  margin-top: 40px;
  padding: 0 12px;
  max-height:65.3vh;
  box-sizing: border-box;
}
.header{
  width: 100%;
  height: 5.9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
}
.body{
  width: 100%;
  max-height: 55.7vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.body > img{
  border-radius: 8px;
  max-width: 42.6vw;
  max-height: 27.5vh;
}

@media (max-width: 800px) {
  .con{
    max-height:40vh;
  }
}
@media (max-width: 695px) {
  .con{
    max-height:65.3vh;
  }
}
</style>