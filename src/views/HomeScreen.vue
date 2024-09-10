<template>
<div class="con">
  <div class="header">
    <img src="@/assets/applogo.svg" alt='앱로고'/>
  </div>
  <div class="body">
    <carousel-slider/>
    <category-menu/>
    <lanked-list/>
    <best-list/>
    <best-review-list/>
  </div>
  <menu-bar/>
</div>

</template>
<script>
import CarouselSlider from "@/components/Home/CarouselSlider.vue";
import CategoryMenu from "@/components/Home/CategoryMenu.vue";
import LankedList from "@/components/Home/LankedList.vue";
import BestList from "@/components/Home/BestList.vue";
import BestReviewList from "@/components/Home/BestReviewList.vue";
import MenuBar from "@/components/common/MenuBar.vue";

export default ({
  components: {
    CarouselSlider,
    CategoryMenu,
    LankedList,
    BestList,
    BestReviewList,
    MenuBar
  },

})
</script>

<style scoped>
div, li, ul, span{
  box-sizing: border-box;
}
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
.body{
  padding-bottom: 8.3vh;
}
</Style>