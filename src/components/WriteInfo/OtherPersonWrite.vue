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
        time: this.$refs.timeInput.getTime(),  // TimeInput에서 시간을 가져오는 가정
        gender: this.$refs.genderSelected.getGender(),  // GenderSelectedBtn에서 성별을 가져오는 가정
        birth: this.$refs.birthInput.getBirth()  // BirthInput에서 생년월일을 가져오는 가정
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
  <button @click="saveInfo">저장</button>
</template>

<style scoped>
</style>
