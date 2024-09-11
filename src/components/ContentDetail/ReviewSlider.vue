<template>
  <div class="reviews-con">
    <div class="reviews-texts">
      <div>
        리뷰
        <p>{{ reviews.length }}</p>
      </div>
      <span>모두 보기</span>
    </div>
    <swiper
        :slides-per-view="1"
        :pagination="{ clickable: true, el:null }"
        :spaceBetween="0"
        :centeredSlides="true"
        :modules="modules"
        class="swiper"
    >
      <swiper-slide v-for="(review, index) in reviews" :key="index" class="slide">
        <div class="slide-item">
          <div>
            {{ review.text }}
          </div>
          <span>{{ review.nickname }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Pagination, A11y} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/vue";

export default{
  components: {
    SwiperSlide,
    Swiper
  },
  emits: ['swiper', 'slideChange'],
  data(){
    return{
      reviews: [
        {
          nickname: '코니',
          text: '다른데서도 올해 2,3월달에 새로운 인연을 맺을수도 있다고 나왔는데 타로를 통해서 2달후(3월) 새로운 인연이 생길 확률이 90퍼센트 이상으로 나와서 넘 기대 중이에요. 타로카드를 통해 미래를 알 수 있다니 신기하네요. 미래가 기대되네요.',
        },
        {
          nickname: '코니',
          text: '다른데서도 올해 2,3월달에 새로운 인연을 맺을수도 있다고 나왔는데 타로를 통해서 2달후(3월) 새로운 인연이 생길 확률이 90퍼센트 이상으로 나와서 넘 기대 중이에요. 타로카드를 통해 미래를 알 수 있다니 신기하네요. 미래가 기대되네요.',
        },
      ],
      modules: [Pagination, A11y],
    }
  },
}
</script>
<style scoped>
.swiper{
  width: 100%;
}
.slide{
  max-width: 100%;
  height: 117px;
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}
.slide-item{
  width: calc(100vw - 16px - 48px / 1.2);
  height: 100%;
  padding: 14px 16px;
  border-radius: 8px;
  border: 0.5px solid #D9D9D9;
  display: grid;
  row-gap: 4px;
}
.slide-item div{
  display: -webkit-box;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 최대 세 줄까지 표시 */
  max-height: calc(1.2em * 3); /* 세 줄의 최대 높이 설정 (줄 간격을 고려한 값 사용) */
  font-size: 14px;
  font-weight: 400;
  color: #555;
}
.slide-item span{
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}
.reviews-con{
  box-sizing: border-box;
  padding: 16px;
  display: grid;
  row-gap: 11px;
  border-bottom: 0.5px solid #CCC;
}
.reviews-texts{
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  row-gap: 4px
}
.reviews-texts > div p{

}
.reviews-texts > div{
  color: #1E2352;
  font-size: 18px;
  font-weight: 700;
}
.reviews-texts span{
  color: #121212;
  font-size: 16px;
  font-weight: 400;
}
.reviews-texts > div span {
  font-weight: 700;
}

</style>