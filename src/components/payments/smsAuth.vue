<script>
export default {
  name: "smsAuth",
  data() {
    return {
      name: '',         // 이름/닉네임 값
      phoneNumber: '',  // 휴대폰 번호 값

    };
  },
  computed: {
    // 이름과 전화번호가 모두 입력되었는지 확인
    isFormValid() {
      return this.name.length > 0 && this.phoneNumber.length === 11; // 전화번호는 숫자 11자리로 한정
    }
  },
  watch: {
    isFormValid(newVal) {
      this.$emit('formStatus', newVal); // 상태를 부모 컴포넌트에 전달
    }
  }
};
</script>

<template>
  <div class="my-5 flex flex-col gap-3">
    <input
        v-model="name"
        type="text"
        placeholder="이름/닉네임 최대 10자"
        class="w-full py-2 text-xl border-b-2 border-gray-300 focus:border-primary text-primary
          placeholder:text-xl placeholder:font-bold focus:outline-none transition duration-300"
    />
    <input
        v-model="phoneNumber"
        type="text"
        placeholder="휴대폰 번호 숫자 11자리"
        class="w-full py-2 text-xl border-b-2 border-gray-300 focus:border-primary text-primary
          placeholder:text-xl placeholder:font-bold focus:outline-none transition duration-300"
    />
  </div>
</template>

<style scoped>

</style>
