<script>
import axios from 'axios';

export default {
  name: "OtherPersonInfo",
  data() {
    return {
      otherPerson: null,
      userSaju: null,
      apiUrl: "http://34.64.230.160:3001/my_infos/1", // 사용자 정보 저장 URL
      userSajuUrl: "http://34.64.230.160:3001/my_infos/1/user_saju" // 사주 정보 가져오기 URL
    };
  },
  mounted() {
    // localStorage에서 저장된 정보를 가져옴
    const storedInfo = localStorage.getItem('otherPersonInfo');
    if (storedInfo) {
      this.otherPerson = JSON.parse(storedInfo);
      this.saveOtherPersonInfo(this.otherPerson);
    }

    // 사용자 사주 정보 가져오기
    this.getUserSaju();
  },
  methods: {
    // 상대방 정보를 서버에 저장하는 메서드
    saveOtherPersonInfo(info) {
      axios.patch(this.apiUrl, {
        my_info: {
          pName: info.name,
          pGender: info.gender === "남성" ? 1 : 2, // 성별을 숫자로 변환
          pBirthday: info.birth,
          pBirthtime: info.time
        }
      })
          .then(response => {
            console.log("상대방 정보가 성공적으로 저장되었습니다:", response.data);
          })
          .catch(error => {
            console.error("상대방 정보를 저장하는 중 오류가 발생했습니다:", error);
          });
    },
    // 사주 정보를 가져오는 메서드
    getUserSaju() {
      axios.get(this.userSajuUrl)
          .then(response => {
            this.userSaju = response.data.user_saju;
          })
          .catch(error => {
            console.error("사주 정보를 가져오는 중 오류가 발생했습니다:", error);
          });
    }
  }
}
</script>

<template>
  <div v-if="otherPerson">
    <h2>상대방 정보</h2>
    <p>이름: {{ otherPerson.name }}</p>
    <p>성별: {{ otherPerson.gender }}</p>
    <p>생년월일: {{ otherPerson.birth }}</p>
    <p>시간: {{ otherPerson.time }}</p>

    <div v-if="userSaju">
      <h2>사용자 사주 정보</h2>
      <pre>{{ userSaju }}</pre>
    </div>
  </div>
  <div v-else>
    <p>상대방 정보가 없습니다.</p>
  </div>
</template>

<style scoped>

</style>
