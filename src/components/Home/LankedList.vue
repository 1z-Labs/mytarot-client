<template>
  <div class="con">
    <h1>마이타로 BEST</h1>
    <div>
      <div class="best-category">
        <button :class="clickedName === item ? 'clicked' : 'nonclicked'" v-for="(item, idx) in bestCategory" :key="idx" @click="filterCategory(item)">
        {{item}}
        </button>
      </div>
      <swiper
          :slides-per-view="1"
          :pagination="{ clickable: true, el:null }"
          @slideChange="onSlideChange"
          :spaceBetween="0"

          :modules="modules"
          class="swiper"
      >
        <swiper-slide v-for="(i) in 3" :key="i" class="slide">
          <div class="slide-item" v-for="(j) in 3" :key="j">
              <span>{{ (i - 1) * 3 + j }}</span>
              <img src="@/assets/Home/lank/6_thumbnail_2.jpg" alt=""/>
              <div class="text">
                <h1>오늘, 내 맘속 그사람의 속마음?</h1>
                <p>내 마음에 있는 그 사람이 날 어떻게 생각할까?</p>
              </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

export default {
  components: {
    SwiperSlide,
    Swiper
  },
  data(){
    return{
      bestCategory:["종합", "솔로탈출", "재회", "직장취업", "오늘운세"],
      clickedName : '종합',
      index: 1,
    }
  },
  methods: {
    filterCategory(item) {
      this.clickedName = item;
    },
    onSlideChange(swiper) {
      this.currentPage = swiper.activeIndex;
      console.log(this.currentPage)
    },
  },
  modules: [ Pagination, A11y ],
}
</script>

<style scoped>
.con{
  width: 100%;
  padding-left: 16px;
  margin-top: 24px;
}
h1{
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin: 12px 0;
  color: #121212;
}
.best-category{
  width: 100%;
  overflow-x: scroll;
  display: flex;
  column-gap: 8px;
  margin-bottom: 8px;
}
button{
  height: 3.9vh;
  border:none;
  border-radius: 16px;
  font-size: 14px;
  word-break:keep-all;
  padding: 4px 14px 4px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.best-category::-webkit-scrollbar {
  display: none;
}


.nonclicked{
    background-color: #ECECEC;
    color: #555555;
}
.clicked{
  background-color: #1E2352;
  color: white;
}
.slide{
  width: 82.6vw !important;
}
.slide-item{
  box-sizing: border-box;
  width: 78.4vw;
  height: 10.5vh;
  border-radius: 8px;
  padding: 31px 16.5px;
  border: 0.5px solid #ECECEC;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.slide-item span{
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
}
.slide-item img{
  width: 12vw;
  height: 7.6vh;
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
}
.text h1{
  font-size: 14px;
  padding:0;
  margin:0;
}
.text p{
  display: block;
  font-size: 12px;
  font-weight: 400;
  width: 46.4vw;
  white-space: nowrap; /* 줄바꿈을 하지 않음 */
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>