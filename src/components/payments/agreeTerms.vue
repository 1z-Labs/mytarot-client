<script>
export default {
  name: "agreeTerms"
}
</script>

<template>
  <!--약관 동의 체크-->
  <p class="text-lg font-bold">휴대폰 인증</p>
  <div class="my-5 flex flex-col gap-5">
    <div class="flex gap-2 items-center">
      <img src="@/assets/payments/icons/deactivatedButtonIcon.svg">
      <p>마이타로 이용 약관 동의</p>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <img src="@/assets/payments/icons/deactivatedCheckIcon.svg">
        <p>(필수) 서비스 이용약관 ></p>
      </div>
      <div class="flex gap-2 items-center">
        <img src="@/assets/payments/icons/deactivatedCheckIcon.svg">
        <p>(필수) 개인정보 수집이용 동의 ></p>
      </div>
    </div>
  </div>
  <!--약관 동의 안내-->
  <div class="bg-gray-100 rounded-lg flex gap-3.5 p-4">
    <img src="@/assets/payments/icons/bookIcon.svg" width="35">
    <div>
      <p class="text-[10px] text-gray-500">약관에 동의해주셔야</p>
      <p class="text-[12px]">해석이 완료되면 알림톡으로 알려드릴 수 있어요</p>
    </div>
  </div>
</template>

<style scoped>

</style>