<template>
  <div class="con">
    <div class="header">
      <img src="@/assets/backBtn.svg" alt='뒤로가기'/>
      <span>{{ category }}</span>
    </div>
    <div class="body">
      <span v-if="contents && contents.length">총{{ contents.length }}개</span>
      <div class="content_con">
        <router-link to='/contentsDetail' class="content" v-for="(item, idx) in contents" :key="idx" alt="">
          <img :src="item.img" alt=""/>
          <div class="text">
            <h1>{{ item.title }}</h1>
            <p>{{  item.description }}</p>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      category: '전문사주',
      contents: [],
    }
  },
  created() {
    this.contents=[
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
      {
        title : '소설처럼 다가올 3명의 인연',
        description: '다가올 인연 세명과 소로 탈출 비결 대공개!',
        img: require('@/assets/Home/lank/6_thumbnail_2.jpg'),
      },
    ]
  }
}
</script>
<style scoped>
div, span, ul, li{
  box-sizing: border-box;
}
.header{
  width:100%;
  height: 7.8vh;
  display: flex;
  align-items: center;
  padding: 23px 16px;
  border-bottom: 1px solid #ECECEC;
  position: fixed;
  top: 0;
  background-color: white;
}
.header >  img{
  width: 6.4vw;
  height: 2.9vh;
}
.header >span{
  margin:auto;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
}
.body{
  width: 100%;
  padding: 0px 16px 50px 16px;
  padding-top: calc(7.8vh + 20px);
}
.body > span{
  font-size: 14px;
  font-weight:  700;
  line-height: 14px;
  text-align: left;
}
.content_con{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  row-gap: 26px;
  column-gap: 8px;
}
.content{
  width:100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 12px;
}
.content img{
  width:100%;
  border-radius: 4px;
}
.content h1{
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
}
.content p{
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #8A8A8A;
}
.text{
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}
</style>