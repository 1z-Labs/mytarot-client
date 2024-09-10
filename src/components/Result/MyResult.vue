<template>
  <div class="resultContainer h-screen flex flex-col justify-start items-center w-screen pt-[50px]">
    <div class="relative w-screen text-center">
      <img src="@/assets/Result/flower.svg" class="w-full h-[30px]"/>
      <p class="mt-[4px] text-[14px] text-[#555] chapter-name text-center">Chapter 1</p>
      <p class="text-xl chapter-title">나의 사주명식</p>
    </div>

    <!-- 사용자 정보 -->
    <div class="bg-myResultBg text-white text-center w-[87.2vw] rounded h-[3.2vh] mt-[26px] mx-auto">
      <p class="mt-0.5 my-name">장정원님</p>
    </div>

    <div>
      <div v-if="loading">정보를 불러오는 중입니다...</div>
      <div v-if="error">{{ error }}</div>
      <div v-else>

        <!--사용자 정보-->
        <div class="bg-[#ECECEC] w-[87.2vw] mt-1 rounded flex justify-center gap-12 h-[4.9vh] items-center mx-auto">
          <p>{{ userInfo?.birthday }}</p>
          <p>{{ userSaju?.time }}</p>
          <p>{{ userInfo?.gender }}</p>
        </div>
        <img src="@/assets/Result/MyResultSep.svg" class="mt-2.5 w-[87.2vw] mx-auto"/>

        <!-- 사주 레이블 및 값 -->
        <div class="saju-grid bg-myResultBg w-[87.2vw] h-[3.2vh] gap-4 mx-auto mt-[10px]">
          <div v-for="(item, index) in sajuItems" :key="index" class="saju-item text-center">
            <p class="label text-sm font-bold">{{ juList[index] }}</p>
          </div>
        </div>

        <!-- 사용자의 사주 정보를 가져온다 -->
        <div class="mt-4 flex gap-[9px] justify-center">
          <div v-for="(item, index) in sajuItems" :key="index" class="text-center">

            <!-- 사용자의 천간 정보를 가져온다 -->
            <div :style="getStyle(item.ganKor)" class="w-[75px] h-[75px] rounded-[12px] gap-[9px] p-2">
              <p class="text-[11px]">{{ item.ganKor }}</p>
              <p class="text-2xl">{{ item.ganHan }}</p>
              <p class="text-[11px]">{{ getElement(item.ganKor) }}</p>
            </div>

            <!-- 사용자의 지지 정보를 가져온다 -->
            <div :style="getStyle(item.jiKor)" class="mt-[9px] w-[75px] h-[75px] rounded-[12px] p-2">
              <p class="text-[11px]">{{ item.jiKor }}</p>
              <p class="text-2xl">{{ item.jiHan }}</p>
              <p class="text-[11px]">{{ getElement(item.jiKor) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "MyResult",
  data() {
    return {
      userSaju: null,
      userInfo: null,
      loading: true,
      error: null,
      juList: ["시주", "일주", "월주", "년주"],
      sajuItems: []
    };
  },
  async mounted() {
    await this.fetchMyData();
  },
  methods: {
    async fetchMyData() {
      try {
        const [userSajuResponse, userInfoResponse] = await Promise.all([
          axios.get(`http://localhost:3000/my_infos/1/user_saju`),
          axios.get(`http://localhost:3000/my_infos/1/non_p_fields`),
        ]);

        this.userSaju = userSajuResponse.data.user_saju;
        this.userInfo = userInfoResponse.data;

        // 천간과 지지를 추출하여 저장
        this.sajuItems = [
          this.extractGanJi(this.userSaju.time),
          this.extractGanJi(this.userSaju.day),
          this.extractGanJi(this.userSaju.month),
          this.extractGanJi(this.userSaju.year),
        ];

        this.loading = false;
      } catch (error) {
        console.error("사주 정보를 불러오는 데 실패했습니다:", error);
        this.error = "사주 정보를 불러오는 데 실패했습니다.";
        this.loading = false;
      }
    },
    // 천간과 지지를 분리하는 함수 (한글과 한자를 각각 추출)
    extractGanJi(sajuString) {
      const [ganjiKor, ganjiHan] = sajuString.split(" ");
      const [ganKor, jiKor] = ganjiKor.split("");
      const [ganHan, jiHan] = ganjiHan.replace(/[()]/g, "").split("");
      return {
        ganKor,
        jiKor,
        ganHan,
        jiHan,
      };
    },

    // 천간과 지지에 따른 스타일 반환
    getStyle(type) {
      if (["갑", "을", "인", "묘"].includes(type)) {
        return {color: "white", backgroundColor: "#4768A8"};
      } else if (["병", "정", "사", "오"].includes(type)) {
        return {color: "white", backgroundColor: "#CF5354"};
      } else if (["무", "기"].includes(type)) {
        return {color: "black", backgroundColor: "#F4D156"};
      } else if (["경", "신", "유", "술"].includes(type)) {
        return {color: "black", backgroundColor: "#CFCFCF"};
      } else if (["임", "계", "해", "자", "축"].includes(type)) {
        return {color: "white", backgroundColor: "#525252"};
      }
      return {};
    },

    // 천간과 지지에 따른 오행 반환
    getElement(type) {
      if (["갑", "을", "인", "묘"].includes(type)) {
        return "목"; // 목
      } else if (["병", "정", "사", "오"].includes(type)) {
        return "화"; // 화
      } else if (["무", "기"].includes(type)) {
        return "토"; // 토
      } else if (["경", "신", "유", "술"].includes(type)) {
        return "금"; // 금
      } else if (["임", "계", "해", "자", "축"].includes(type)) {
        return "수"; // 수
      }
      return ""; // 기본값
    }
  }
};
</script>


<style scoped>
.resultContainer {
  background-image: url("@/assets/Result/ResultBackground.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.my-name {
  font-family: 'SUIT', sans-serif;
  line-height: 140%;
  font-style: normal;
}

.chapter-title {
  margin-top: 8px;
  font-family: 'KimjungchulMyungjo';
}

.chapter-name {
  font-family: 'SUIT', sans-serif;
}

.saju-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: white;
  border-radius: 4px;
}

.saju-item {
  display: flex;
  column-gap: 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.label {
  font-size: 14px;
}

</style>
