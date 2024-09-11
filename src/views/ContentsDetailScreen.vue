<template>
<div>
  <div class="header">
    <img src="@/assets/backBtn.svg" alt='뒤로가기' @click="this.$router.push(`/`);"/>
    <span>콘텐츠 상세 설명</span>
  </div>
  <div class="body">
    <card-header/>
    <review-slider/>
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
import CardHeader from "@/components/ContentDetail/CardHeader";
import ReviewSlider from "@/components/ContentDetail/ReviewSlider.vue";
export default {
  components: {
    CardHeader,
    ReviewSlider
  },
  data(){
    return {
      price: 65,
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
  z-index: 100;
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
/* 리뷰 */
.con-div{
  padding: 28px 16px;
  display: grid;
  row-gap: 12px;
  border-bottom: 0.5px solid #CCC;
}
.con-div h1{
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  color: #121212;
}
.con-div > div{
  width: 100%;
  word-break: keep-all;
}
.con-div ul{
  width: 100%;
}
.con-div h1{
  color: #121212;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
}
.con-div li{
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
  height:7.6vh;
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
