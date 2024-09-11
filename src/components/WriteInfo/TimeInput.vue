<template>
  <div class="con">
    <input type="time" v-model="selectedTime" />
  </div>
</template>

<script>
export default {
  name: "TimeInput",
  data() {
    return {
      selectedTime: ''
    };
  },
  methods: {
    getTime() {
      return this.selectedTime;
    }
  }
}
</script>

<style scoped>
.con {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 4.9vh;
}

input[type="time"] {
  width: 85.3vw;
  height: 50px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
}

input[type="time"]:focus {
  border: 2px solid #242424;
  outline: none;
}
</style>
