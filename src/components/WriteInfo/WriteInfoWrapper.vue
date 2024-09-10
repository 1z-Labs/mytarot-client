<template>
  <div style="width:100%;height:100%;">
    <div class="header">
      <img src="@/assets/WriteInfo/close.svg" id="close" @click="close" alt=""/>
      <img src="@/assets/applogo.svg" alt=""/>
      <div class="step">
        <div class="step-bar"></div>
        <div class="step-bar"></div>
        <div class="step-bar"></div>
      </div>
    </div>
     <component :is="currentComponent" :key="$route.params.currentIndex" class="body"/>
      <div class="footer">
        <button v-if="currentIndex === 0" id="btn" @click="nextChapter">다음</button>
        <div v-else class="btn-box">
          <button class="btn cancel" @click="prevChapter">이전</button>
          <button class="btn" @click="currentIndex++">확인</button>
        </div>
      </div>
  </div>
</template>

<script>
import WriteInfo from "@/components/WriteInfo/WriteInfo.vue";
import MyInfoResult from "@/components/WriteInfo/MyInfoResult.vue";

export default {
  components: {
    WriteInfo,
    MyInfoResult
  },
  watch: {
    '$route.params.currentIndex': {
      immediate: true,
      handler(newIndex) {
        // URL 파라미터로부터 currentIndex 동기화
        this.currentIndex = parseInt(newIndex, 10) || 0;
      }
    }
  },
  data() {
    return {
      currentIndex: 0, // 현재 챕터의 인덱스 (0은 목차 페이지)
      totalLength: 2,
      step: 0,
    };
  },
  computed: {
    currentComponent() {
      // currentIndex에 따라 다른 컴포넌트를 렌더링
      switch (this.currentIndex) {
        case 0:
          return WriteInfo;
        case 1:
          return MyInfoResult;
        default:
          return '';
      }
    }
  },

  methods: {
    // 이전 챕터로 이동
    prevChapter() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateRoute();
      }
    },
    // 다음 챕터로 이동
    nextChapter() {
      if (this.currentIndex < this.totalLength){
        this.currentIndex++;
        this.updateRoute();
      }

    },
    // URL을 업데이트하여 경로를 동기화
    updateRoute() {
      this.$router.push({path: `/writeInfo/${this.currentIndex}`});
    },
    close() {
      this.$router.push('/home');  // 뒤로 가기 버튼이 눌리면 홈으로 이동
    }
  },
};
</script>
<style scoped>
.body{
  height: 100%;
}
.header{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 6.2vh;
  width:100%;
  position: relative;
}
.header img{
  width: 24vw;
}
#btn{
  width: 85.3vw;
  height: 7.2vh;
  background-color: #1E2352;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  position: fixed;
  bottom: 16px;
}
#close{
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
}
.step{
  width: 100%;
  display: flex;
  position:absolute;
  bottom:0;
}
.step-bar{
  width: 33vw;
  height:2px;
  background-color: #1E2352;
}

.footer{
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn-box{
  position: fixed;
  bottom: 16px;
  width: 100%;
  display: flex;
  column-gap: 8px;
  justify-content: center;
}
.btn{
  width: 60.2vw;
  height: 6.4vh;
  background-color: #1E2352;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: white;
}
.cancel{
  width: 24.8vw;
  border:1.5px solid #1E2352;
  background-color: white;
  color: #1E2352;
}
</style>
