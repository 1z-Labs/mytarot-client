<script>
export default {
  name: "payContentsInfo"
}
</script>

<template>
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
</template>