<template>
  <ul class="con">
    <li v-for="(item, idx) in categoryMenu" :key="idx">
      <img :src="item.image" alt="카테고리 이미지"/>
      <span>{{ item.icon }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
        return{
          categoryMenu: [
            {
              icon: "타로",
              link: "",
              image: require(`@/assets/Home/category/category1.svg`)
            },
            {
              icon: "전문사주",
              description: "전문 사주 서비스",
              image: require(`@/assets/Home/category/category2.svg`)
            },
            {
              icon: "사주타로",
              description: "사주 타로 서비스",
              image: require(`@/assets/Home/category/category3.svg`)
            },
            {
              icon: "신규",
              description: "신규 서비스",
              image: require(`@/assets/Home/category/category4.svg`)
            },
            {
              icon: "무료운세",
              description: "무료 운세 서비스",
              image: require(`@/assets/Home/category/category5.svg`)
            },
            {
              icon: "연애사주전문 도화",
              description: "연애 사주 전문 도화 서비스",
              image: require(`@/assets/Home/category/category6.svg`)
            },
            {
              icon: "재회사주전문 지호",
              description: "재회 사주 전문 지호 서비스",
              image: require(`@/assets/Home/category/category7.svg`)
            },
            {
              icon: "솔로탈출",
              description: "솔로 탈출 서비스",
              image: require(`@/assets/Home/category/category8.svg`)
            },
            {
              icon: "재회",
              description: "재회 관련 서비스",
              image: require(`@/assets/Home/category/category9.svg`)
            },
            {
              icon: "연애고민",
              description: "연애 고민 서비스",
              image: require(`@/assets/Home/category/category10.svg`)
            },
            {
              icon: "직장취업",
              description: "직장 및 취업 관련 서비스",
              image: require(`@/assets/Home/category/category11.svg`)
            },
            {
              icon: "오늘운세",
              description: "오늘의 운세 서비스",
              image: require(`@/assets/Home/category/category12.svg`)
            },
            {
              icon: "극비상담",
              description: "극비 상담 서비스",
              image: require(`@/assets/Home/category/category13.svg`)
            },
            {
              icon: "재물운",
              description: "재물운 서비스",
              image: require(`@/assets/Home/category/category14.svg`)
            }
          ]

        }
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