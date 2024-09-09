<template>
<div>
  <div class="header">
    <img src="@/assets/backBtn.svg" alt='뒤로가기'/>
    <span>콘텐츠 상세 설명</span>
  </div>
  <div class="body">
    <div class="card-header">
      <div class="card-con">
          <div class="card-back" :style="{ backgroundImage: 'url(' + img + ')' }">
            <img class="thumb" :src="img" alt="썸네일 이미지" />
            <div class="tags">
              <span class="tag" v-for="(t, idx) in tag" :key="idx" :style="{ backgroundColor: t === '전문사주' ? '#000000' : '#EF608B' }">{{t}}</span>
            </div>
          </div>
        <div class="title-con">
          <h2 class="title">{{title}}</h2>
          <p class="desc">{{description}}</p>
        </div>
      </div>
    </div>

    <div class="reviews-con">
      <div class="reviews-texts">
        <div>
          리뷰
          <span>{{ reviews.length }}</span>
        </div>
        <span>모두 보기</span>
      </div>
      <swiper
          :slides-per-view="1"
          :pagination="{ clickable: true, el:null }"
          :spaceBetween="0"
          :centeredSlides="true"
          :modules="modules"
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

    <div class="con-div">
      <h1>소개</h1>
      <div v-html="introText"></div>
    </div>

    <div class="con-div">
      <h1>해석 목차</h1>
      <ul>
        <li v-for="(item, index) in chapterList" :key="index" class="view">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="con-div">
      <h1>미리보기</h1>
      <div class="preview">
        <img v-for="(link, idx) in preViewImg" :src="link"  :key="idx" alt="">
      </div>
    </div>

    <div class="con-div">
      <h1>연관 추천</h1>
      <div class="preper">
        <img :src="link" v-for="(link, idx) in aboutList" :key="idx" alt="">
      </div>
    </div>

    <button>
      구매하기
      <span>
        {{price}}
        <img src="@/assets/Home/clobar.svg" alt="">
      </span>
    </button>

  </div>

</div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, A11y} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

export default {

  emits: ['swiper', 'slideChange'],
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      title: '그 사람도 날 좋아할까? 짝사랑이 이뤄지는 사주비책',
      description: '사주로 파헤치는 짝사랑의 비밀',
      tag: ['전문사주','솔로탈출'],
      img: require('@/assets/Home/lank/217_thumbnail.jpg'),
      price: 65,
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
      introText: "짝사랑 중인 당신의 마음은 안녕한가요?<br/>" +
          "그 사람도 나를 좋아하는지 설렘 반, 불안함 반으로 밤잠을 설치고있지는 않나요?<br/>" +
          "<br/>" +
          "이제 나의 속마음부터 그 분의 속마음까지 <br/>" +
          "당신의 궁금증을 모두 풀어드릴게요. <br/>" +
          "<br/>" +
          "나와 그 사람의 사주풀이를 통해, <br/>" +
          "현재와 앞으로의 두 분의 인연을 풀이해드립니다. <br/>" +
          "<br/>" +
          "🔮 이런 방식으로 해석합니다<br/>" +
          "✔ 사주팔자의 천간과 지지의 조합을 분석하여 나의 성향과 마음상태를 분석합니다.<br/>" +
          "✔ 사주팔자의 오행과 십성을 분석하여 나의 연애 성향을 파악합니다. <br/>" +
          "✔ 사주팔자의 연주, 월주, 일주를 분석하여 나와 상대방의 궁합을 분석합니다.<br/>" +
          "✔ 사주팔자의 대운을 분석해 나와 상대방의 연애운을 예측합니다. <br/>" +
          "<br/>" +
          "이런 분들에게 추천해요!<br/>" +
          "<br/>" +
          "😢 짝사랑으로 마음이 혼란하신 분<br/>" +
          "👀 그 사람의 속마음이 궁금하신 분<br/>" +
          "🌸 짝사랑하는 상대와 연인으로 발전하고 싶은 분<br/>" +
          "💕 고백할 완벽한 타이밍을 고민하고 계신 분",
      chapterList: ['내 마음이 왜 이런걸까?', "앞으로 다가올 연애운 전환점", "그 사람도 나를 생각할까?", "상대의 마음속에 다른 사람이 있을까?", "앞으로 우리 두사람은 어떻게 될까?","내 마음을 전해도 될까?","그 사람의 마음을 사로잡는 비법", "마지막으로 나에게 전하는 한마디"],
      preViewImg: [require('@/assets/Home/11_preview_01.jpg'), require('@/assets/Home/11_preview_02.jpg')],
      aboutList:  [
        require('@/assets/Home/11_preview_01.jpg'),
        require('@/assets/Home/11_preview_02.jpg'),
        require('@/assets/Home/11_preview_01.jpg'),
        require('@/assets/Home/11_preview_02.jpg'),
        require('@/assets/Home/11_preview_01.jpg'),
        require('@/assets/Home/11_preview_02.jpg'),
      ],
      modules: [Pagination, A11y],
    }
  },
}

</script>
<style scoped>
div, span, ul, li{
  box-sizing: border-box;
}
.header{
  width:100vw;
  height: 7.8vh;
  display: flex;
  align-items: center;
  padding: 23px 16px;
  border-bottom: 1px solid #ECECEC;
  position: fixed;
  top: 0;
  background-color: white;
}
.header > img{
  width: 6.4vw;
  height: 2.9vh;
}
.header >span{
  margin:auto;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
}

/* card */
.body{
  position: relative;
  margin-top: 7.8vh;
}
.card-con{
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 59px;
}
.card-back{
  width:100%;
  height: 15.5vh;
  background-position: center;
  position:relative;
}
.card-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15.5vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4); /* 검은색 반투명 셀로판 */
  pointer-events: none; /* 오버레이가 클릭을 막지 않도록 설정 */
}
.card-header{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.thumb{
  width: 106px;
  height: 147px;
  border-radius: 4px;
  position: relative;
  top:18px;
  left: 16px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);
}
.tags{
  display: flex;
  gap: 8px;
  position: absolute;
  top: 136px;
  left: 133px;
}
.tag{
  box-sizing: border-box;
  padding: 4px;
  height : 2.2Vh;
  border-radius: 2px;
  background-color: #000000;
  color: white;
  font-size: 10px;
  line-height: 10px;
}
.title-con{
  position:relative;
  width: 100%;
  padding: 0px 16px 28px 16px;
  border-bottom: 0.5px solid #CCC;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.title{
  width: 100%;
  word-break: keep-all;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.4px;
  color: #121212;
}
.desc{
  font-size: 14px;
  font-weight: 400;
  color: #555555;
  width: 100%;
  word-break: keep-all;
}


/* 리뷰 */
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
}
.slide-item div{
  box-sizing: border-box;
  display: -webkit-box;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #555;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 최대 세 줄까지 표시 */
  max-height: calc(1.2em * 3); /* 세 줄의 최대 높이 설정 (줄 간격을 고려한 값 사용) */
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

.con-div{
  padding: 28px 16px;
  display: grid;
  row-gap: 12px;
  border-bottom: 0.5px solid #CCC;
}
.intro-con h1{
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  color: #121212;
}
.intro-con > div{
  width: 100%;
  word-break: keep-all;
}
.con ul{
  width: 100%;
}
.con h1{
  color: #121212;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
}
.con li{
  list-style:inside;
  line-height: 155%;
}
.preview{
  display: flex;
  justify-content: center;
  column-gap: 8px;
  overflow: hidden;
}
.preview img{
  max-width: 160px;
  height: 264px;
  border-radius: 8px;
  border: 0.5px solid #CCCCCC;
}
.preper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 8px;
  row-gap: 9px;
  overflow: hidden;
}
.preper img{
  max-width: 160px;
  height: 264px;
  border-radius: 8px;
  border: 0.5px solid #CCCCCC;
}
button{
  width: 100%;
  height:10.5vh;
  background-color: #1E2352;
  color:white;
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 9px;
}
button span{
  color: #4BD1A9;
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
