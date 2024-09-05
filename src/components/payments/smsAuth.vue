<script>
export default {
  name: "smsAuth"
}
</script>

<template>
  <div class="my-5 flex flex-col gap-3">
    <input
        type="text"
        placeholder="이름/닉네임 최대 10자"
        class="w-full py-2 text-xl border-b-2 border-gray-300 focus:border-primary text-primary
          placeholder:text-xl placeholder:font-bold focus:outline-none transition duration-300"
    />
    <input
        type="text"
        placeholder="휴대폰 번호 숫자 11자리"
        class="w-full py-2 text-xl border-b-2 border-gray-300 focus:border-primary text-primary
          placeholder:text-xl placeholder:font-bold focus:outline-none transition duration-300"
    />
  </div>
</template>

<style scoped>

</style>