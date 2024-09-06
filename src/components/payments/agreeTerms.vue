<script>
export default {
  name: "agreeTerms",
  data() {
    return {
      isButtonActive: false,
      isServiceChecked: false,
      isPrivacyChecked: false,
    };
  },
  computed: {
    allChecked() {
      return this.isServiceChecked && this.isPrivacyChecked;
    },
  },
  watch: {
    allChecked(newVal) {
      this.isButtonActive = newVal;
      this.$emit('termsStatus', newVal); // 상태를 부모 컴포넌트에 전달
    },
    isServiceChecked(newVal) {
      if (!newVal || !this.isPrivacyChecked) {
        this.isButtonActive = false;
      }
    },
    isPrivacyChecked(newVal) {
      if (!newVal || !this.isServiceChecked) {
        this.isButtonActive = false;
      }
    }
  },
  methods: {
    // 전체 동의 버튼이 활성화 되면 두 약관 모두 활성화
    toggleButton() {
      const newState = !this.isButtonActive;
      this.isButtonActive = newState;
      this.isServiceChecked = newState;
      this.isPrivacyChecked = newState;
    },
    // 체크할 항목을 문자열 인자로 받아 처리하도록 개선
    toggleCheck(type) {
      this[type] = !this[type];
      if (!this.isServiceChecked || !this.isPrivacyChecked) {
        this.isButtonActive = false;
      }
    }
  }
};
</script>

<template>
  <!--약관 동의 체크-->
  <p class="text-lg font-bold">휴대폰 인증</p>
  <div class="my-5 flex flex-col gap-5">
    <div class="flex gap-2 items-center" @click="toggleButton">
      <img
          :src="isButtonActive ? require('@/assets/payments/icons/activatedButtonIcon.svg') : require('@/assets/payments/icons/deactivatedButtonIcon.svg')">
      <p>마이타로 이용 약관 동의</p>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center" @click="toggleCheck('isServiceChecked')">
        <img
            :src="isServiceChecked ? require('@/assets/payments/icons/activatedCheckIcon.svg') : require('@/assets/payments/icons/deactivatedCheckIcon.svg')">
        <p>(필수) 서비스 이용약관 ></p>
      </div>
      <div class="flex gap-2 items-center" @click="toggleCheck('isPrivacyChecked')">
        <img
            :src="isPrivacyChecked ? require('@/assets/payments/icons/activatedCheckIcon.svg') : require('@/assets/payments/icons/deactivatedCheckIcon.svg')">
        <p>(필수) 개인정보 수집이용 동의 ></p>
      </div>
    </div>
  </div>
  <!--약관 동의 안내-->
  <div class="bg-gray-100 rounded-lg flex gap-3.5 p-4">
    <img :src="require('@/assets/payments/icons/bookIcon.svg')" width="35">
    <div>
      <p class="text-[10px] text-gray-500">약관에 동의해주셔야</p>
      <p class="text-[12px]">해석이 완료되면 알림톡으로 알려드릴 수 있어요</p>
    </div>
  </div>
</template>

<style scoped>
/* 필요한 스타일을 여기에 추가하세요 */
</style>
