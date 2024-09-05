<script>
import PayContentsInfo from "@/components/payments/payContentsInfo.vue";
import SmsAuth from "@/components/payments/smsAuth.vue";
import AgreeTerms from "@/components/payments/agreeTerms.vue";

export default {
  name: "PaymentScreen",
  components: {AgreeTerms, SmsAuth, PayContentsInfo},
}
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
    <agree-terms/><!--약관 동의-->
    <sms-auth/><!--input field-->
  </div>

  <button type="submit" class="py-5 w-full flex items-center justify-center text-white bg-primary fixed bottom-0 left-0 right-0 text-xl font-bold">
    인증문자 받기
  </button>
</template>

<style scoped>

</style>