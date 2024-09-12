<template>
  <div class="horoscope-table">
    <div class="header" v-for="idx in 4" :key="idx">
      {{formattedList.saju[idx -1]}}
    </div>
    <!-- 첫 번째 행: 천간 -->
    <div class="item gan" v-for="idx in 4." :key="idx">
      <span class="chinese-char">{{ formattedList.ch[idx -1] }}</span>
      {{ formattedList.kor[idx -1] }}
    </div>
    <!-- 두 번째 행: 지지 -->
    <div class="item" v-for="idx in 4" :key="idx">
      <span class="chinese-char">{{ formattedList.ch[4 + idx -1] }}</span>
      {{ formattedList.kor[ 4 + idx -1] }}</div>

  </div>
</template>

<script>
export default {
  props: {
    saju: {
      type: Object,
      required: true
    }
  },
  methods: {
    sajuListFormat(sajuData) {
      const result = {
        saju: ["시주", "일주", "월주", "년주"],
        kor: [],
        ch: []
      };
      const korParts = [];
      const chParts = [];

      for (const key in sajuData) {
          const [korPart, chPartWithBrackets] = sajuData[key].split(' ('); // ' ('로 한글과 한자 분리
          const chPart = chPartWithBrackets ? chPartWithBrackets.slice(0, -1) : ''; // ')' 제거
          if (korPart && chPartWithBrackets) {
            korParts.push(korPart); // 한글 파트를 저장
            chParts.push(chPart);   // 한자 파트를 저장
          }
      }

      // 천간과 지지를 순서대로 배열에 추가
      for (let i = 0; i < 2; i++) { //천간, 지지
        for (let j = 0; j < 4; j++) {
          result.kor.push(korParts[j] ? korParts[j][i] : '');
          result.ch.push(chParts[j] ? chParts[j][i] : '');
        }
      }
      return result;
    }
},
  computed:{
    formattedList(){
      return this.sajuListFormat(this.saju)
    }
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
