<script>
export default {
  name: "PaymentScreen",
}
</script>

<template>
  <!--앱바-->
  <div class="py-4 flex items-center justify-center border-b border-gray-200">
    <p class="text-xl font-bold">결제하기</p>
  </div>

  <!--제품 정보-->
  <div class="px-4 py-5">
    <!--제품 이미지 / 제목-->
    <div>
      <p class="text-lg font-bold">결제 정보</p>
      <div class="py-3 flex items-start gap-2.5">
        <img src="@/assets/payments/thumbnail.svg" alt="제품사진" width="70">
        <p class="text-md font-bold">짝사랑이 이뤄지는 사주비책</p>
      </div>
    </div>
    <!--구분선 div 만들기-->
    <div class="mt-2 bg-gray-200 h-0.5"></div>
    <!--결제 금액-->
    <div class="flex justify-between items-center pt-4">
      <p class="text-md font-bold">결제 금액</p>
      <div class="flex gap-2 items-center">
        <p class="text-md line-through font-normal text-gray-400">24,000원</p>
        <p class="text-xl font-semibold text-primary">18,000원</p>
      </div>
    </div>
  </div>

  <!--컴포넌트 구분선-->
  <div class="bg-gray-200 h-2"></div>

  <!--휴대폰 인증-->
  <div class="px-4 py-5">
    <p class="text-lg font-bold">휴대폰 인증</p>
    <!--약관 동의 안내-->
    <div class="my-3 bg-gray-100 rounded-lg flex gap-3.5 p-4">
      <img src="@/assets/payments/icons/bookIcon.svg" width="35">
      <div>
        <p class="text-[10px] text-gray-500">약관에 동의해주셔야</p>
        <p class="text-[12px]">해석이 완료되면 알림톡으로 알려드릴 수 있어요</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>