<script>
export default {
  name: "paymentsMethodScreen",
  data() {
    return {
      selectedPaymentMethod: "", // 선택된 결제수단
      selectedCardCompany: "", // 선택된 카드사
      selectedInstallmentPlan: "" // 선택된 할부 옵션
    };
  },
  methods: {
    handlePaymentMethod(method) {
      this.selectedPaymentMethod = method;
      console.log(`${method} 결제 방식이 선택되었습니다.`);
    }
  }
}
</script>

<template>
  <!--앱바-->
  <div class="py-4 flex items-center justify-center border-b border-gray-200">
    <p class="text-xl font-bold">결제하기</p>
  </div>

  <!--결제 금액-->
  <div class="bg-gray-100 rounded-lg flex justify-between items-center p-3 m-4">
    <p class="text-md text-gray-500">결제 금액</p>
    <p class="text-lg text-primary font-bold">18,000원</p>
  </div>

  <!--결제 방법-->
  <div class="m-4 flex flex-col gap-2">
    <p class="text-xl font-bold">결제 방법</p>
    <div class="my-2 flex flex-col gap-2">
      <!-- 신용카드 버튼 -->
      <button class="payment-button" @click="handlePaymentMethod('신용카드')">
        신용카드
      </button>
      <!-- 나머지 결제 수단 버튼 -->
      <div class="flex gap-2">
        <button class="payment-button flex-grow" @click="handlePaymentMethod('휴대폰')">
          휴대폰
        </button>
        <button class="payment-button flex-grow flex items-center justify-center" @click="handlePaymentMethod('카카오페이')">
          <img src="@/assets/payments/icons/kakaoPayIcon.svg" alt="카카오페이">
        </button>
        <button class="payment-button flex-grow flex items-center justify-center" @click="handlePaymentMethod('토스페이')">
          <img src="@/assets/payments/icons/tossPayIcon.svg" alt="토스페이">
        </button>
      </div>
    </div>

    <!--카드사 / 할부 드롭다운-->
    <div class="flex flex-col gap-2">
      <select class="bg-gray-100 rounded-lg p-3" v-model="selectedCardCompany">
        <option value="" disabled>카드사를 선택하세요</option>
        <option value="삼성카드">삼성카드</option>
        <option value="우리카드">우리카드</option>
        <option value="신한카드">신한카드</option>
      </select>
      <select class="bg-gray-100 rounded-lg p-3" v-model="selectedInstallmentPlan">
        <option value="" disabled>할부를 선택하세요</option>
        <option value="일시불">일시불</option>
        <option value="1개월">1개월 (무이자)</option>
        <option value="2개월">2개월 (무이자)</option>
      </select>
    </div>

    <!-- 선택된 항목을 출력 (디버깅용) -->
<!--    <div class="mt-4">-->
<!--      <p>선택된 결제 수단: {{ selectedPaymentMethod }}</p>-->
<!--      <p>선택된 카드사: {{ selectedCardCompany }}</p>-->
<!--      <p>선택된 할부 옵션: {{ selectedInstallmentPlan }}</p>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
/* 공통 버튼 스타일 */
.payment-button {
  background-color: #f3f3f3;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.125rem;
  text-align: center;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.payment-button:hover {
  background-color: #1E2352; /* hover 시 색상 변경 */
  color: #FFF;
}

.flex-grow {
  flex-grow: 1; /* 동일한 크기로 버튼 배치 */
}
</style>
