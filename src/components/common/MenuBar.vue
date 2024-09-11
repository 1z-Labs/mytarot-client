<template>
  <ul>
    <li v-for="(item, idx) in menu" :key="idx">
      <router-link :to="item.link" class="menu_item" @click="setCurrentMenu(item.name)">
        <img :src="currentMenu === item.name? item.clickedIcon: item.icon" alt=""/>
        <span :class="{'active-text': currentMenu === item.name, 'inactive-text': currentMenu !== item.name}">{{item.name}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentMenu: {
      type: String,
      default: '홈'
    }
  },
  data(){
    return{
      menu: [
        {
          name: "홈",
          link: "/",
          icon: require(`@/assets/Home/menu/Home.svg`),
          clickedIcon: require(`@/assets/Home/menu/clickedHome.svg`)
        },
        {
          name: "타로챗",
          link: "/",
          icon: require(`@/assets/Home/menu/tarotChat.svg`),
          clickedIcon: require(`@/assets/Home/menu/clickedTarotChat.svg`)
        },
        {
          name: "타로",
          link: "/resultCreate",
          icon: require(`@/assets/Home/menu/myTarot.svg`),
          clickedIcon: require(`@/assets/Home/menu/clickedMyTarot.svg`)
        },
        {
          name: "마이페이지",
          link: "/",
          icon: require(`@/assets/Home/menu/myPage.svg`),
          clickedIcon: require(`@/assets/Home/menu/clickedMyPage.svg`)
        }
      ]
    }
  },
  methods:{
    setCurrentMenu(menuName, menuIcon){
      this.$emit('setCurrentMenu', menuName)
      this.$emit('setCurrentIcon', menuIcon);
    }
  }
}
</script>

<style scoped>
ul{
  width: 100%;
  height: 8.3vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1E2352;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
img{
  display: block;
  width: 28px;
  height: 28px;
}
span{
  font-size: 10px;
  color: #FFFFFF;
}
.menu_item{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inactive-text {
  color: #7E818C;
}
.active-text {
  color: white;
}

</style>