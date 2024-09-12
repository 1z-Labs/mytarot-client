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
          <p>{{ userInfo?.gender === 0 ? '여자' : '남자' }}</p>
        </div>
<!--        <img src="@/assets/Result/MyResultSep.svg" class="mt-2.5 w-[87.2vw] mx-auto"/>-->

        <!-- 사주 레이블 및 값 -->
        <div class="saju-grid bg-myResultBg w-[87.2vw] h-[3.2vh] gap-4 mx-auto mt-[10px]">
          <div v-for="(item, index) in sajuItems" :key="index" class="saju-item text-center">
            <p class="label text-sm font-bold">{{ juList[index] }}</p>
          </div>
        </div>

        <!--간 버튼-->
        <div class="flex gap-[9px]">
          <button
              v-for="(labelObj, index) in buttonGanLabels"
              :key="index"
              class="btnStyle"
              @click="openModal(labelObj)">
            {{ labelObj.label }}
          </button>
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

        <!--지지 버튼-->
        <div class="flex gap-[9px]">
          <button
              v-for="(labelObj, index) in buttonJiLabels"
              :key="index"
              class="btnStyle"
              @click="openModal(labelObj)">
            {{ labelObj.label }}
          </button>
        </div>

      </div>
    </div>

    <Modal
        :is-visible="isModalVisible"
        :title="modalTitle"
        :meaning="modalMeaning"
        :features="modalFeatures"
        @close="isModalVisible = false"
    />
  </div>
</template>


<script>
import axios from "axios";
import Modal from '@/components/Result/ResultBtnModal.vue'

export default {
  name: "MyResult",
  components: {
    Modal
  },
  data() {
    return {
      userSaju: null,
      userInfo: null,
      loading: true,
      error: null,
      juList: ["시주", "일주", "월주", "년주"],
      buttonGanLabels: [
        {label: '상관', meaning: '자신의 재능을 마음껏 뽐내는 삶', features: '총명, 특별한 재능, 부지런, 적극적, 논리적'},
        {label: '일원', meaning: '나 자신을 나타내는 중요한 요소', features: '기본적인 성격, 성향, 그리고 인생에서의 역할을 파악할 수 있다.'},
        {label: '정재', meaning: '규칙적이고 안정적인 재물', features: '안정적인 수입과 재물 관리를 의미하여 합리적인 재정관리를 통해 안정적인 재산을 축척한다.'},
        {
          label: '편관',
          meaning: '도전과 경쟁, 불안정성의 의미를 가진다.',
          features: '강한 추진력과 결단력을 가지고 있으며, 도전적이고, 경쟁심이 강하고, 변동이 많으며, 예측 불가능한 상황에 잘 대응하고, 반항적인 성향이 있을 수 있다. '
        }
      ],
      buttonJiLabels: [
        {
          label: '편인',
          meaning: '창조적 사고와 독립성, 예술과 직관의 의미를 가진다.',
          features: '창의적이고 직관적이며, 독립적이고, 예술적 감각이 뛰어나며, 고독을 즐기고, 일반적인 틀에 얽매이지 않으며, 다른 사람들과 다소 다른 관점을 가진다.'
        },
        {
          label: '편관',
          meaning: '도전과 경쟁, 불안정성의 의미를 가진다.',
          features: '강한 추진력과 결단력을 가지고 있으며, 도전적이고, 경쟁심이 강하고, 변동이 많으며, 예측 불가능한 상황에 잘 대응하고, 반항적인 성향이 있을 수 있다. '
        },
        {
          label: '편인',
          meaning: '창조적 사고와 독립성, 예술과 직관의 의미를 가진다.',
          features: '창의적이고 직관적이며, 독립적이고, 예술적 감각이 뛰어나며, 고독을 즐기고, 일반적인 틀에 얽매이지 않으며, 다른 사람들과 다소 다른 관점을 가진다.'
        },
        {
          label: '식신',
          meaning: '창조와 생산, 풍요와 안락함의 의미를 가진다.',
          features: '창의력이 뛰어나고 생산적이며, 안정적인 생활을 추구하고, 관대하며, 여유롭고, 실용적인 성향이 있다.'
        }
      ],
      sajuItems: [],
      isModalVisible: false,
      modalTitle: '',
      modalMeaning: '',
      modalFeatures: ''
    };
  },
  async mounted() {
    await this.fetchMyData();
  },
  methods: {
    async fetchMyData() {
      try {
        const [userSajuResponse, userInfoResponse] = await Promise.all([
          axios.get(`http://34.64.230.160:3001/my_infos/1/user_saju`),
          axios.get(`http://34.64.230.160:3001/my_infos/1/non_p_fields`),
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
    openModal(labelObj) {
      this.modalTitle = labelObj.label;
      this.modalMeaning = labelObj.meaning;
      this.modalFeatures = labelObj.features;
      this.isModalVisible = true;
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
        return "목";
      } else if (["병", "정", "사", "오"].includes(type)) {
        return "화";
      } else if (["무", "기"].includes(type)) {
        return "토";
      } else if (["경", "신", "유", "술"].includes(type)) {
        return "금";
      } else if (["임", "계", "해", "자", "축"].includes(type)) {
        return "수";
      }
      return "";
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

.btnStyle {
  width: 75px;
  height: 40px;
  border-radius: 50px;
  flex-shrink: 0;
  background-color: #fff;
  border: 1px solid #999;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 8px;
  font-size: 14px;
  font-family: 'SUIT', sans-serif;
  font-weight: 800;
  line-height: 140%;
}
</style>
