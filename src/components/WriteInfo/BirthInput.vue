<template>
  <div class="container">
    <div class="header">
      <p>생년월일</p>
      <span> * 양력으로 입력해주세요</span>
    </div>
    <div class="body">
      <div v-for="(field, index) in fields" :key="index" class="box">
        <input
            ref="inputs"
            type="number"
            v-model="field.value"
            :placeholder="'0'.repeat(placeholder)"
            @focus="clearPlaceholder(index)"
            @blur="resetPlaceholder(index)"
            @input="moveToNext(index)"
            :maxlength="field.placeholder"
        /> {{ field.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { label: '년', value: '', placeholder: 4 },
        { label: '월', value: '', placeholder: 2 },
        { label: '일', value: '', placeholder: 2 }
      ]
    };
  },
  methods: {
    clearPlaceholder(index) {
      this.fields[index].placeholder = ''; // 포커스 시 placeholder를 빈 문자열로 설정
    },
    resetPlaceholder(index) {
      if (this.fields[index].value === '') {
        this.fields[index].placeholder = this.getDefaultPlaceholder(index); // 기본 placeholder로 복구
      }
    },
    getDefaultPlaceholder(index) {
      // 각 필드의 기본 placeholder를 반환
      const defaultPlaceholders = ["0000", "00", "00"];
      return defaultPlaceholders[index];
    },
    moveToNext(index) {
      const currentField = this.fields[index];
      const value = currentField.value;
      const year = new Date().getFullYear();

      console.log(parseInt(value.toString().padStart(2, '0')));

      // 0번째 인덱스: 연도 입력
      if (index === 0) {
        const numericValue = parseInt(currentField.value , 10);
        if (numericValue >= 1900 && numericValue <= year) {
          // 연도가 유효하면 다음 필드로 포커스 이동
          if (this.$refs.inputs[index + 1]) {
            this.$refs.inputs[index + 1].focus();
          }
        }
        // 1번째 인덱스: 월 입력
      } else if (index === 1) {
        const numericValue = parseInt(value, 10);
        if (numericValue >= 1 && numericValue <= 12) {
          if(numericValue <= 9)
            currentField.value= parseInt(value.toString().padStart(2, '0')); // 한자리 숫자는 0으로 패딩
          else  currentField.value = value;

          if (this.$refs.inputs[index + 1])
            this.$refs.inputs[index + 1].focus(); // 다음 필드가 있을 경우 포커스 이동
        }
        // 2번째 인덱스: 일 입력
      } else if (index === 2) {
        const numericValue = parseInt(value, 10);
        if (numericValue >= 1 && numericValue <= 31) {
          currentField.value =parseInt(value.toString().padStart(2, '0')); // 한자리 숫자는 0으로 패딩
          if (this.$refs.inputs[index + 1]) {
            this.$refs.inputs[index + 1].focus(); // 다음 필드가 있을 경우 포커스 이동
          }
        }
      }
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

div {
  display: flex;
  width: 85.3vw;
}

.header {
  justify-content: space-between;
}

.body {
  justify-content: space-around;
  align-items: baseline;
  font-size: 18px;
  font-weight: 700;
}
.box{
  align-items: baseline;
  font-size: 18px;
  font-weight: 700;
}

span {
  color: #FF6666;
  font-weight: 700;
  font-size: 12px;
}

input {
  width: 12.8vw;
  height: 5.1vh;
  border-radius: 8px;
  border: none;
  text-align: center;
  font-weight: 700;
  background: #F5F5F5;
}

input:first-child {
  width: 21.3vw;
}

input::placeholder {
  color: #CCCCCC;
  font-size: 18px;
  font-weight: 700;
}

input:focus {
  outline: 2px solid #242424;
  box-sizing: border-box;
}
</style>
