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

    <button @click="handlePayBtn">
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
import axios from 'axios';
import CardHeader from "@/components/ContentDetail/CardHeader";
import ReviewSlider from "@/components/ContentDetail/ReviewSlider.vue";

export default {
  components: {
    CardHeader,
    ReviewSlider
  },
  data() {
    return {
      price: 0,
      introText: '',
      chapterList: ['내 마음이 왜 이런걸까?', "앞으로 다가올 연애운 전환점", "그 사람도 나를 생각할까?", "상대의 마음속에 다른 사람이 있을까?", "앞으로 우리 두사람은 어떻게 될까?","내 마음을 전해도 될까?","그 사람의 마음을 사로잡는 비법", "마지막으로 나에게 전하는 한마디"],
      preViewImg: [require('@/assets/Home/11_preview_01.jpg'), require('@/assets/Home/11_preview_02.jpg')],
      aboutList: [
        require('@/assets/Home/11_preview_01.jpg'),
        require('@/assets/Home/11_preview_02.jpg'),
        require('@/assets/Home/11_preview_01.jpg'),
        require('@/assets/Home/11_preview_02.jpg'),
        require('@/assets/Home/11_preview_01.jpg'),
        require('@/assets/Home/11_preview_02.jpg'),
      ],
      contentTitle: '',
      contentSubtitle: '',
      contentDescription: '',
      contentImagePath: '',
      clover: 0
    };
  },
  created() {
    this.fetchContentData();
  },
  methods: {
    async fetchContentData() {
      try {
        const response = await axios.get('http://34.64.230.160:3001/contents/1');
        const data = response.data;
        this.contentDescription = data.description;
        this.introText = `${data.description}`;
        this.price = data.clover;
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    },
    handlePayBtn() {
      this.$router.push('/writeInfoStart');
    }
  }
};
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
