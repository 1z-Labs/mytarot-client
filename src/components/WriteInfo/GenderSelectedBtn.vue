<template>
  <div class="container">
    <p>성별</p>
    <div class="body">
      <label :class="{ checked: selectedGender === '남성' }">
        남성
        <input type="radio" value="남성" name="gender" v-model="selectedGender" />
      </label>
      <label :class="{ checked: selectedGender === '여성' }">
        여성
        <input type="radio" value="여성" name="gender" v-model="selectedGender" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenderSelectedBtn",
  data() {
    return {
      selectedGender: "여성", // 기본값을 여성으로 설정
    };
  },
  methods: {
    getGender() {
      return this.selectedGender; // 선택된 성별을 반환
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 7px;
}

p {
  width: 85.3vw;
  display: block;
  font-size: 14px;
  font-weight: 800;
}

.body {
  display: flex;
  flex-direction: row;
  column-gap: 7px;
}

label {
  width: 42.6vw;
  height: 5.9vh;
  background-color: #ececec;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

input[type="radio"] {
  display: none;
}

.checked {
  background: #333333;
  color: white;
}
</style>
