<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title">
      <p>첫번째 항목</p>
      <span>헬리님의 정보를 확인해주세요</span>
    </div>
    <div class="body">
      <div class="info-box">
        <div class="info" v-for="(info, idx) in userInfo" :key="idx">
          {{ info }}
        </div>
      </div>

      <div class="horoscope">
        <span>생년월일시에 따른 사주명식</span>
        <horoscope-table :saju="userSaju"/>
        <button @click="showAlert = true"><img src="@/assets/WriteInfo/help.svg" alt="도움버튼">알고 계신 사주간지와 다른가요?</button>
      </div>
    </div>
  </div>
  <basic-alert v-model:show="showAlert" :title="'사주명식 계산안내'" :height=45.3 :bodyText="alertText"/>
  <basic-confirm v-model:show="showConfirm" :title="'정말 나가시겠어요?'" :height=25.6 :bodyText="confirmText"
                 :btn1="'나가기'" :btn2="'이어서하기'" :FuncNo="FunctionNo" :FuncYes="FunctionYes"/>
  <div>
    <p>{{ userSaju }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import HoroscopeTable from "@/components/WriteInfo/HoroscopeTable.vue";
import BasicAlert from "@/components/common/Modal/BasicAlert.vue";
import BasicConfirm from "@/components/common/Modal/BasicConfirm.vue";

export default {
  components: {
    BasicConfirm,
    BasicAlert,
    HoroscopeTable
  },

  data() {
    return {
      showAlert: false,
      showConfirm: false,
      otherPerson: null,  // 상대방 정보
      userSaju: null,     // 서버로부터 받아올 사주 데이터
      alertText: `...`,   // 생략된 알림 텍스트
      confirmText: `...`, // 생략된 확인 텍스트
      apiUrl: "http://34.64.230.160:3001/my_infos/1", // 사용자 정보 저장 URL
      userSajuUrl: "http://34.64.230.160:3001/my_infos/1/user_saju" // 사주 정보 가져오기 URL
    };
  },

  mounted() {
    // 상대방 정보 로드
    this.loadOtherPersonInfo();
    // 사용자 사주 정보 가져오기
    this.getUserSaju();
  },

  methods: {
    // 상대방 정보를 로컬 스토리지에서 불러오기
    loadOtherPersonInfo() {
      const storedInfo = localStorage.getItem('otherPersonInfo');
      if (storedInfo) {
        this.otherPerson = JSON.parse(storedInfo);
        this.saveOtherPersonInfo(this.otherPerson);
      }
    },

    // 상대방 정보를 서버에 저장
    async saveOtherPersonInfo(info) {
      try {
        await axios.patch(this.apiUrl, {
          my_info: {
            pName: info.pName,
            pGender: info.pGender === "남성" ? 1 : 2,  // 성별을 숫자로 변환
            pBirthday: info.pBirthday,
            pBirthtime: info.pBirthtime
          }
        });
      } catch (error) {
        console.error("상대방 정보 저장 중 오류 발생:", error);
      }
    },

    // 사주 정보를 서버에서 가져오기
    async getUserSaju() {
      try {
        const response = await axios.get(this.userSajuUrl);
        this.userSaju = response.data.user_saju;
      } catch (error) {
        console.error("사주 정보를 가져오는 중 오류 발생:", error);
      }
    },

    // 사용자 정보 업데이트
    async createUserInfo() {
      try {
        const response = await axios.put(this.apiUrl, {
          gender: this.otherPerson.pGender,
          birthday: this.otherPerson.pBirthday,
          birthtime: this.otherPerson.pBirthtime
        });

        this.fetchUserSaju(response.data.id);
      } catch (error) {
        console.error('사용자 정보 생성 오류:', error);
      }
    },

    // 나가기 버튼 클릭
    FunctionNo() {
      console.log('나가기 버튼 클릭');
    },

    // 이어서하기 버튼 클릭
    FunctionYes() {
      console.log('이어서하기 버튼 클릭');
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 28px;
}

.title {
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 85.3vw;
}

.title > p {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}

.title > span {
  font-size: 24px;
  font-weight: 700;
}

#close {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
}

.step {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
}

.step-bar {
  width: 33vw;
  height: 2px;
  background-color: #1E2352;
}

.info-box {
  width: 85.3vw;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.info {
  width: fit-content;
  background-color: #F5F5F5;
  padding: 8px 18px 8px 18px;
  border-radius: 8px;
}

.horoscope {
  margin-top: 40px;
}

.horoscope > span {
  display: block;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 12px;
}

.horoscope button {
  width: 58.6vw;
  height: 4.1vh;
  background-color: #F5F5F5;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  color: #1E2352;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
}

</style>
