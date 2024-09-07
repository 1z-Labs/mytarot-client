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
      isFormValid: false, // 이름 / 전화번호 상태
      isModalVisible: false, // 모달 표시 여부
      authCode: '', // 입력된 인증번호
    };
  },
  computed: {
    // 버튼 활성화 조건
    isButtonEnabled() {
      return this.isAllTermsChecked && this.isFormValid;
    },
    // 인증번호가 올바른지 확인 (000000만 허용)
    isAuthCodeValid() {
      return this.authCode === '000000';
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
    // 인증문자 받기 버튼 클릭 시 모달 표시
    handleButtonClick() {
      this.isModalVisible = true;
    },
    // 인증번호 입력 완료 후 처리
    handleAuthCodeSubmit() {
      if (this.isAuthCodeValid) {
        this.$router.push('/paymentsMethod'); // 인증 성공 시 페이지 이동
      } else {
        alert('잘못된 인증번호입니다.');
      }
    },
    // 모달 닫기
    closeModal() {
      this.isModalVisible = false;
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

  <button
      type="submit"
      class="py-5 w-full flex items-center justify-center text-white fixed bottom-0 left-0 right-0 text-xl font-bold"
      :class="isButtonEnabled ? 'bg-primary' : 'bg-gray-400'"
      :disabled="!isButtonEnabled"
      @click="handleButtonClick"
  >
    인증문자 받기
  </button>

  <!-- 인증번호 입력 모달 -->
  <div v-if="isModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg p-6 w-80">
      <p class="text-lg font-bold mb-4">인증번호 입력</p>
      <input
          v-model="authCode"
          type="text"
          placeholder="000000"
          maxlength="6"
          class="w-full border border-gray-300 rounded p-2 mb-4 text-center text-lg"
      />
      <button
          class="w-full py-2 bg-primary text-white font-bold rounded"
          @click="handleAuthCodeSubmit"
      >
        인증번호 확인
      </button>
      <button
          class="w-full py-2 mt-2 bg-gray-400 text-white font-bold rounded"
          @click="closeModal"
      >
        닫기
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
