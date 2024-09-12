<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title">
      <p> 첫번째 항목 </p>
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
        <!-- saju 데이터를 HoroscopeTable로 전달 -->
        <horoscope-table :saju="userSaju"/>
        <button @click="showAlert = true"><img src="@/assets/WriteInfo/help.svg" alt="도움버튼">알고 계신 사주간지와 다른가요?</button>
      </div>
    </div>
  </div>
  <basic-alert v-model:show="showAlert" :title="'사주명식 계산안내'" :height=45.3 :bodyText="alertText"/>
  <basic-confirm v-model:show="showConfirm" :title="'정말 나가시겠어요?'" :height=25.6 :bodyText="confirmText"
                 :btn1="'나가기'" :btn2="'이어서하기'" :FuncNo="FunctionNo" :FuncYes="FunctionYes"/>
  <div>

    <!--    사용자 사주 출력-->
    <p>{{userSaju}}</p>
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
    HoroscopeTable,
  },

  data() {
    return {
      showAlert: false,
      showConfirm: false,
      userInfo: {
        gender: '',
        birthday: '',
        birthtime: ''
      },
      userSaju: null,  // 서버로부터 받아올 사주 데이터
      alertText: `...`,  // 생략된 알림 텍스트
      confirmText: `...` // 생략된 확인 텍스트
    }
  },

  mounted() {
    this.loadUserInfo();
    this.createUserInfo();
  },

  methods: {
    loadUserInfo() {
      const storedInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (storedInfo) {
        this.userInfo = storedInfo;
      }
    },

    async createUserInfo() {
      try {
        const response = await axios.put('http://34.64.230.160:3001/my_infos/1', {
          gender: this.userInfo.gender,
          birthday: this.userInfo.birthday,
          birthtime: this.userInfo.birthtime
        });

        this.fetchUserSaju(response.data.id);
      } catch (error) {
        console.error('사용자 정보 생성 오류:', error);
      }
    },

    async fetchUserSaju() {
      try {
        const response = await axios.get(`http://34.64.230.160:3001/my_infos/1/user_saju`);
        this.userSaju = response.data;
      } catch (error) {
        console.error('사주 정보 불러오기 오류:', error);
      }
    },

    FunctionNo() {
      console.log('나가기 버튼 클릭');
    },

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