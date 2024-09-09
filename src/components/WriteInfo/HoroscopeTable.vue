<template>
    <div class="horoscope-table">
      <div class="header" v-for="idx in 4" :key="idx">
        {{dataes.saju[idx -1]}}
      </div>
      <!-- 첫 번째 행: 천간 -->
      <div class="item gan" v-for="idx in 4." :key="idx">
        <span class="chinese-char">{{ dataes.ch[idx -1] }}</span>
        {{ dataes.kor[idx -1] }}
      </div>
      <!-- 두 번째 행: 지지 -->
      <div class="item" v-for="idx in 4" :key="idx">
        <span class="chinese-char">{{ dataes.ch[4 + idx -1] }}</span>
        {{ dataes.kor[ 4 + idx -1] }}</div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      dataes: {
        saju: ["시주", "일주", "월주", "년주"],
        kor: ["갑", "을", "병", "정", "무", "기", "경", "신"],
        ch: ["庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"],
      },
      koreanList: [],
      chineseList: [],
    };
  },
  methods: {
    splitKoreanAndChinese(str) {
      this.koreanList = str.match(/[가-힣]+/g);
      this.chineseList = str.match(/[\u4e00-\u9fff]+/g);
    },

  }
};
</script>

<style scoped>
*{
  font-weight: normal;
}
.horoscope-table {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4열로 구성 */
  width: 87.2vw;
}
.header {
  font-weight: bold;
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  border-bottom:none;
}
.header:nth-child(1) {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.header:nth-child(4){
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.item:nth-child(4n) {
  border-right: none;
}
.item {
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #777;
  border: 1px solid #e0e0e0;
  border-top:none;
  border-left:none;
}
.chinese-char{
  font-size: 20px;
  color: #333;
  font-weight: 500;
}

</style>
