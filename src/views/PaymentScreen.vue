<script>
import PayContentsInfo from "@/components/payments/payContentsInfo.vue";
import SmsAuth from "@/components/payments/smsAuth.vue";
import AgreeTerms from "@/components/payments/agreeTerms.vue";

export default {
  name: "PaymentScreen",
  components: { AgreeTerms, SmsAuth, PayContentsInfo },
  data() {
    return {
      isAllTermsChecked: false, // 약관동의 선택 여부
      isFormValid: false, // 이름 / 전화번호 상태 (오타 수정됨)
    };
  },
  computed: {
    // 버튼 활성화 조건
    isButtonEnabled() {
      return this.isAllTermsChecked && this.isFormValid;
    },
  },
  methods: {
    // 약관 동의 상태 업데이트
    updateTermsStatus(status) {
      this.isAllTermsChecked = status;
    },
    updateFormStatus(status) {
      this.isFormValid = status;
    },
  },
};
</script>

<template>
  <!--앱바-->
  <div class="py-4 flex items-center justify-center border-b border-gray-200">
    <p class="text-xl font-bold">결제하기</p>
  </div>

  <pay-contents-info/><!--제품 정보 섹션-->

  <!--컴포넌트 구분선-->
  <div class="bg-gray-200 h-2"></div>

  <!--휴대폰 인증 섹션-->
  <div class="px-4 py-5">
    <agree-terms @termsStatus="updateTermsStatus"/><!--약관 동의-->
    <sms-auth @formStatus="updateFormStatus"/><!--input field-->
  </div>

  <!-- 상태 값 출력 (디버깅용) -->
<!--  <div class="text-center mb-4">-->
<!--    <p>약관 동의: {{ isAllTermsChecked }}</p>-->
<!--    <p>폼 유효성: {{ isFormValid }}</p>-->
<!--    <p>버튼 활성화 여부: {{ isButtonEnabled }}</p>-->
<!--  </div>-->


  <button
      type="submit"
      class="py-5 w-full flex items-center justify-center text-white fixed bottom-0 left-0 right-0 text-xl font-bold"
      :class="isButtonEnabled ? 'bg-primary' : 'bg-gray-400'"
      :disabled="!isButtonEnabled"
  >
    인증문자 받기
  </button>
</template>

<style scoped>

</style>
