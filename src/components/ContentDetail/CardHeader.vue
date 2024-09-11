<template>
  <div class="card-header">
    <div class="card-con">
      <div class="card-back" :style="{ backgroundImage: 'url(' + img + ')' }">
        <img class="thumb" :src="require(`@/assets/Home/lank/217_thumbnail.jpg`)" alt="썸네일 이미지"/>
        <div class="tags">
          <span class="tag" v-for="(t, idx) in tag" :key="idx"
                :style="{ backgroundColor: t === '전문사주' ? '#000000' : '#EF608B' }">{{ t }}</span>
        </div>
      </div>
      <div class="title-con">
        <h2 class="title">{{ title }}</h2>
        <p class="desc">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      description: '',
      tag: ['전문사주', '솔로탈출'],
      img: ''
    }
  },
  created() {
    this.fetchContentData();
  },
  methods: {
    async fetchContentData() {
      try {
        const response = await axios.get('http://34.64.230.160:3001/contents/1');
        const data = response.data;
        this.title = data.title;
        this.subtitle = data.subtitle;
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    }
  }
}
</script>

<style scoped>
.card-header {
  position: relative;
  margin-top: 7.8vh;
}

.card-con {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 59px;
}

.card-back {
  width: 100%;
  height: 15.5vh;
  background-position: center;
  position: relative;
}

.card-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15.5vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.4); /* 검은색 반투명 셀로판 */
  pointer-events: none; /* 오버레이가 클릭을 막지 않도록 설정 */
}

.card-header {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.thumb {
  width: 106px;
  height: 147px;
  border-radius: 4px;
  position: relative;
  top: 18px;
  left: 16px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);
}

.tags {
  display: flex;
  gap: 8px;
  position: absolute;
  top: 136px;
  left: 133px;
}

.tag {
  box-sizing: border-box;
  padding: 4px;
  height: 2.2Vh;
  border-radius: 2px;
  background-color: #000000;
  color: white;
  font-size: 10px;
  line-height: 10px;
}

.title-con {
  position: relative;
  width: 100%;
  padding: 0px 16px 28px 16px;
  border-bottom: 0.5px solid #CCC;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.title {
  width: 100%;
  word-break: keep-all;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.4px;
  color: #121212;
}

.desc {
  font-size: 14px;
  font-weight: 400;
  color: #555555;
  width: 100%;
  word-break: keep-all;
}
</style>