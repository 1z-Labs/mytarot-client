<script>
export default {
  name: "OtherPersonInfo",
  data() {
    return {
      otherPerson: null
    };
  },
  mounted() {
    // localStorage에서 저장된 정보를 가져옴
    const storedInfo = localStorage.getItem('otherPersonInfo');
    if (storedInfo) {
      this.otherPerson = JSON.parse(storedInfo);
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
  </div>
  <div v-else>
    <p>상대방 정보가 없습니다.</p>
  </div>
</template>

<style scoped>
/* 스타일 추가 가능 */
</style>
