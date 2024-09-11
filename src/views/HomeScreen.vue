<template>
<div class="con">
  <MainHeader/>
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
import MainHeader from "@/components/common/MainHeader.vue";

export default ({
  components: {
    CarouselSlider,
    CategoryMenu,
    LankedList,
    BestList,
    BestReviewList,
    MenuBar,
    MainHeader
  },

})
</script>

<style scoped>
div, li, ul, span{
  box-sizing: border-box;
}

.body{
  padding-bottom: 8.3vh;
}
</Style>