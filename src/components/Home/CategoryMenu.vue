<template>
  <ul class="con">
    <li v-for="(item, idx) in categoryMenu" :key="idx" @click="go(item.icon)">
      <img :src="item.image" alt="카테고리 이미지" />
      <span>{{ item.icon }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
        return{
          clickedCategory : "",
          categoryMenu: [
            {
              icon: "타로",
              image: require(`@/assets/Home/category/category1.svg`)
            },
            {
              icon: "전문사주",
              image: require(`@/assets/Home/category/category2.svg`)
            },
            {
              icon: "사주타로",
              image: require(`@/assets/Home/category/category3.svg`)
            },
            {
              icon: "신규",
              image: require(`@/assets/Home/category/category4.svg`)
            },
            {
              icon: "무료운세",
              image: require(`@/assets/Home/category/category5.svg`)
            },
            {
              icon: "연애사주전문 도화",
              image: require(`@/assets/Home/category/category6.svg`)
            },
            {
              icon: "재회사주전문 지호",
              image: require(`@/assets/Home/category/category7.svg`)
            },
            {
              icon: "솔로탈출",
              image: require(`@/assets/Home/category/category8.svg`)
            },
            {
              icon: "재회",
              image: require(`@/assets/Home/category/category9.svg`)
            },
            {
              icon: "연애고민",
              image: require(`@/assets/Home/category/category10.svg`)
            },
            {
              icon: "직장취업",
              image: require(`@/assets/Home/category/category11.svg`)
            },
            {
              icon: "오늘운세",
              image: require(`@/assets/Home/category/category12.svg`)
            },
            {
              icon: "극비상담",
              image: require(`@/assets/Home/category/category13.svg`)
            },
            {
              icon: "재물운",
              image: require(`@/assets/Home/category/category14.svg`)
            }
          ]
        }
      },
    methods:{
      go(icon){
        this.clickedCategory = icon;
        console.log(this.clickedCategory);
        this.updateRoute();
      },
      updateRoute() {
        this.$router.push({path: `/categoryDetail/${this.clickedCategory}`});
      },
    }
  }
</script>

<style scoped>
.con{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 4px;
  margin-top: 22px;
  padding: 0 12px;
}
.con li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li span {
  font-size: 12px;
  word-break: keep-all;
  line-height: 14.4px;
  text-align: center;
}
</style>