<template>
  <div v-if="isVisible" class="modal-overlay flex w-full h-screen">
    <div class="modal-content w-screen bg-[#F5F5F5] p-6 relative">
      <div class="modal-header flex justify-between">
        <p class="mt-2 text-[16px] font-bold text-[#333]">{{ title }}</p>
        <button @click="closeModal">
          <img src="@/assets/Result/closeModalBtn.svg"/>
        </button>
      </div>
      <img src="@/assets/Result/modalSep.svg" class="mt-[13px]"/>
      <div class="modal-body mt-[25px] text-[14px]">
        <p class="text-[#777]"><span class="mr-2 text-[#555] font-extrabold">의미</span>{{ meaning }}</p>

        <div class="relative">
          <span class="mr-2 text-[#555] font-extrabold absolute">특징</span>
          <p class="mt-[16px] text-[#777] w-[290px] ml-[8vw]">{{ features }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    meaning: {
      type: String,
      required: true
    },
    features: {
      type: String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: flex-end;
}

.modal-content {
  border-radius: 16px 16px 0px 0px;
  height: 240px;
}

</style>
