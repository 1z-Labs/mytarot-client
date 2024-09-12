<template>
  <div class="con">
    <div class="header">
      <p>생년월일</p>
      <span> * 양력으로 입력해주세요</span>
    </div>
    <div class="body">
      <div v-for="(field, index) in fields" :key="index" class="box">
        <input
            ref="inputs"
            type="text"
            v-model="field.value"
            :placeholder="field.placeholder"
            @focus="setBolder(index)"
            @blur="setNumberFomat(index)"
            @input="limitInputLength(index)"
            @keydown="allowOnlyNumber($event, index)"
            :maxlength="getMaxLength(index)"
        /> {{ field.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BirthInput",
  data() {
    return {
      fields: [
        { label: '년', value: '', placeholder: '0000' },
        { label: '월', value: '', placeholder: '00' },
        { label: '일', value: '', placeholder: '00' }
      ]
    };
  },
  methods: {
    // 생년월일을 반환하는 메서드
    getBirth() {
      const year = this.fields[0].value;
      const month = this.fields[1].value.padStart(2, '0'); // 월을 두 자리로 보정
      const day = this.fields[2].value.padStart(2, '0');   // 일을 두 자리로 보정
      return `${year}-${month}-${day}`;
    },
    setBolder(index) {
      this.$refs.inputs[index].style.outline = 'none';
    },
    setNumberFomat(index) {
      if (this.fields[index].value === '') {
        this.fields[index].value = '';
      } else if (index > 0) {
        this.fields[index].value = this.fields[index].value.padStart(2, '0');
      }
    },
    limitInputLength(index) {
      const field = this.fields[index];
      field.value = field.value.replace(/\D/g, '');

      if (index === 0) {
        field.value = field.value.slice(0, 4);
      } else {
        field.value = field.value.slice(0, 2);
      }

      if (this.isValidInput(index) && this.isCompleteInput(index)) {
        this.moveToNext(index);
      }
    },
    allowOnlyNumber(event) {
      if (!/^\d$/.test(event.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
        event.preventDefault();
      }
    },
    isCompleteInput(index) {
      if (index === 0) {
        return this.fields[index].value.length === 4;
      } else {
        return this.fields[index].value.length === 2;
      }
    },
    isValidInput(index) {
      const value = parseInt(this.fields[index].value, 10);
      const year = new Date().getFullYear();

      if (index === 0) {
        return value >= 1900 && value <= year && this.fields[index].value.length === 4;
      } else if (index === 1) {
        return value >= 1 && value <= 12;
      } else if (index === 2) {
        return value >= 1 && value <= 31;
      }
      return false;
    },
    moveToNext(index) {
      if (this.$refs.inputs[index + 1]) {
        this.$refs.inputs[index + 1].focus();
      }
    },
    getMaxLength(index) {
      return index === 0 ? 4 : 2;
    }
  }
}
</script>

<style scoped>
.con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

div {
  display: flex;
  width: 85.3vw;
}

.header {
  justify-content: space-between;
  margin-bottom: 8px;
}

.body {
  justify-content: space-between;
  align-items: baseline;
  font-size: 18px;
  font-weight: 700;
}

.box {
  display: block;
  width: fit-content;
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
  border: 1px solid #ccc;
  text-align: center;
  font-weight: 700;
  background: #F5F5F5;
  margin-right: 8px;
  outline: none;
}

div:first-child > input {
  width: 21.3vw;
}

input::placeholder {
  color: #CCCCCC;
  font-size: 18px;
  font-weight: 700;
}

input:focus {
  border: 2px solid #2e2e2e;
}

p {
  display: block;
  font-size: 14px;
  font-weight: 800;
}
</style>
