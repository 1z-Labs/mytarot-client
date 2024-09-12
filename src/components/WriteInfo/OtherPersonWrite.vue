<script>
import TimeInput from '@/components/WriteInfo/TimeInput.vue';
import GenderSelectedBtn from "@/components/WriteInfo/GenderSelectedBtn.vue";
import BirthInput from "@/components/WriteInfo/BirthInput.vue";

export default {
  name: "OtherPersonWrite",
  components: {GenderSelectedBtn, TimeInput, BirthInput},
  data() {
    return {
      name: ''
    };
  },
  methods: {
    saveInfo() {
      const otherPersonData = {
        name: this.name,
        time: this.$refs.timeInput.getTime(),
        gender: this.$refs.genderSelected.getGender(),
        birth: this.$refs.birthInput.getBirth()
      };

      localStorage.setItem('otherPersonInfo', JSON.stringify(otherPersonData));
      console.log('Saved other person info:', otherPersonData);
    }
  }
}
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="title">
      <p> 두번째 항목 </p>
      <span>상대방의 대한 정보를 알려주세요</span>
    </div>
  </div>
  <TimeInput ref="timeInput" class="items-center"/>
  <GenderSelectedBtn ref="genderSelected" class="mt-8"/>
  <BirthInput ref="birthInput" class="mt-8"/>
  <div>
    <p class="namep ml-6 mt-6">이름</p>
    <input
        v-model="name"
        class="nameInput ml-6"
        type="text"
        placeholder="상대방을 어떻게 불러드릴까요?"
    />
  </div>
</template>

<style scoped>

.title{
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 85.3vw;
}
.title > p{
  font-size: 14px;
  font-weight: 700;
  margin-bottom:8px;
}
.title > span{
  font-size: 24px;
  font-weight: 700;
}
.nameInput{
  box-sizing: border-box;
  width:87.2vw;
  height: 5.9vh;
  border-radius: 8px;
  background-color: #F5F5F5;
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 18px;
  color: #333333
}
.nameInput:focus{
  font-size: 18px;
  color: #000000;
  outline:2px solid #242424;
}
.nameInput::placeholder{
  font-size: 18px;
  color: #BDBDBD;
}
</style>
