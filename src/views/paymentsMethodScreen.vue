<script>
export default {
  name: "paymentsMethodScreen",
  data() {
    return {
      selectedPaymentMethod: "", // 선택된 결제수단
      selectedCardCompany: "", // 선택된 카드사
      selectedInstallmentPlan: "", // 선택된 할부 옵션
      isTermsExpanded: false, // 약관 리스트의 상태
    };
  },
  methods: {
    handlePaymentMethod(method) {
      this.selectedPaymentMethod = method;
      console.log(`${method} 결제 방식이 선택되었습니다.`);
    },
    toggleTerms() {
      this.isTermsExpanded = !this.isTermsExpanded;
    },
    handleButtonClick() {
      console.log("button is Clicked!");
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
      <button
          class="payment-button"
          :class="selectedPaymentMethod === '신용카드' ? 'bg-primary text-white' : ''"
          @click="handlePaymentMethod('신용카드')">
        신용카드
      </button>

      <!-- 나머지 결제 수단 버튼 -->
      <div class="flex gap-2">
        <button
            class="payment-button flex-grow"
            :class="selectedPaymentMethod === '휴대폰' ? 'bg-primary text-white' : ''"
            @click="handlePaymentMethod('휴대폰')">
          휴대폰
        </button>
        <button
            class="payment-button flex-grow flex items-center justify-center"
            :class="selectedPaymentMethod === '카카오페이' ? 'bg-primary text-white' : ''"
            @click="handlePaymentMethod('카카오페이')">
          <img src="@/assets/payments/icons/kakaoPayIcon.svg" alt="카카오페이">
        </button>
        <button
            class="payment-button flex-grow flex items-center justify-center"
            :class="selectedPaymentMethod === '토스페이' ? 'bg-primary text-white' : ''"
            @click="handlePaymentMethod('토스페이')">
          <img src="@/assets/payments/icons/tossPayIcon.svg" alt="토스페이">
        </button>
      </div>
    </div>

    <!--카드사 / 할부 드롭다운-->
    <div class="flex flex-col gap-2">
      <select class="bg-gray-100 rounded-lg p-4" v-model="selectedCardCompany">
      <select class="bg-gray-100 rounded-lg p-3" v-model="selectedCardCompany">

        <option value="" disabled>카드사 선택</option>
        <option value="삼성카드">삼성카드</option>
        <option value="우리카드">우리카드</option>
        <option value="신한카드">신한카드</option>
      </select>

      <select class="bg-gray-100 rounded-lg p-4" v-model="selectedInstallmentPlan">

      <select class="bg-gray-100 rounded-lg p-3" v-model="selectedInstallmentPlan">

        <option value="" disabled>할부 선택</option>
        <option value="일시불">일시불</option>
        <option value="1개월">1개월 (무이자)</option>
        <option value="2개월">2개월 (무이자)</option>
      </select>
    </div>

    <!--약관 동의 펼쳐보기-->
    <div class="flex flex-col gap-3">
      <div class="flex mt-3 items-center cursor-pointer" @click="toggleTerms">
        <img src="@/assets/payments/icons/activatedCheckIcon.svg" alt="약관 동의 아이콘">
        <p class="text-sm text-gray-700">(필수) 결제 서비스 이용 약관, 개인정보 처리 동의</p>
      </div>

      <!-- 약관 리스트 (v-if로 조건부 렌더링) -->
      <transition name="fade">
        <ul v-if="isTermsExpanded" class="list-disc ml-8 text-gray-500 flex flex-col gap-2">
          <li class="text-xs">(필수) 결제 서비스 이용 약관, 개인정보 처리 동의</li>
          <li class="text-xs">(필수) 개인정보 제3자 정보 제공 동의</li>
          <li class="text-xs">(필수) 결제대행 서비스 이용약관 동의</li>
        </ul>
      </transition>
    </div>
  </div>

  <!--결제 버튼-->
  <button class="bg-primary text-white text-lg font-bold p-4 text-center fixed bottom-0 left-0 right-0"
  @click="handleButtonClick">
    18,000원 결제하기
  </button>
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

/* primary 색상 고정 */
.bg-primary {
  background-color: #1E2352; /* primary 색상 */
}
</style>
