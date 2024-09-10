<template>
  <div>
    <swiper
        :slides-per-view="1"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true, el:null }"
        @slideChange="onSlideChange"
        :spaceBetween="0"
        :centeredSlides="true"
        :modules="modules"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="slide">
        <div class="carousel-content">
          <img :src="slide.image" alt="슬라이드 이미지" />
        </div>
      </swiper-slide>
      <div class="pagination-indicator">
        <p> {{ currentPage + 1 }} </p>
        <p> | </p>
        <p>{{ slides.length }} <img src="../../assets/Home/slider.svg" alt="슬라이더버튼"/></p>
      </div>
  </swiper>

  </div>
</template>

<script>
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css';


export default {
  emits: ['swiper', 'slideChange'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentPage: 0,  // 현재 슬라이드 인덱스
      slides: [
        {
          image: require(`@/assets/Home/image.png`),
        },
        {
          image: require(`@/assets/Home/slider.svg`),
        },
        {
          image: require(`@/assets/Home/image.png`),
        },
      ],

      modules: [ Pagination, Autoplay, A11y],

    };
  },
  methods: {
    onSlideChange(swiper) {
      this.currentPage = swiper.activeIndex;
      console.log(this.currentPage)
    },
  },

};
</script>

<style>
.carousel-content {
  text-align: center;
  position:relative;
}
.carousel-content img {
  width: 100%;
}
.pagination-indicator {
  width:16.8vw;
  height:2.7vh;
  background-color: #000000CC;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  position: absolute;
  bottom: 20px;
  right: 14px;
  z-index: 100;
}
.pagination-indicator p{
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #999999;
}
.pagination-indicator p:first-child{
  color: white;
  font-size: 12px;
}
.pagination-indicator img{
  width: 3.2vw;
  height: 1.4vh;
}
.pagination-indicator p:last-child{
  display: flex;
  column-gap: 2px;
  align-items: center;
}
.slide{
  position: relative;
  height: 34.7vh;
  object-fit: fill;
}
</style>
