<template>
  <ul>
    <li v-for="(item, idx) in menu" :key="idx">
      <router-link :to="item.link" class="menu_item" @setCurrentMenu="currentMenu=item.name">
          <img :src="item.icon" :class="{'active-icon': currentMenu === item.name, 'inactive-icon': currentMenu !== item.name}" alt=""/>
        <span :class="{'active-text': currentMenu === item.name, 'inactive-text': currentMenu !== item.name}">{{item.name}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      menu: [
        {
          name: "홈",
          link: "/home",
          icon: require(`@/assets/Home/menu/home.svg`)
        },
        {
          name: "타로챗",
          link: "/tarot_chat",
          icon: require(`@/assets/Home/menu/tarotChat.svg`)
        },
        {
          name: "타로",
          link: "/my_tarot",
          icon: require(`@/assets/Home/menu/myTarot.svg`)
        },
        {
          name: "마이페이지",
          link: "/mypage",
          icon: require(`@/assets/Home/menu/myPage.svg`)
        }
      ],
      currentMenu : '홈'
    }
  },
  methods:{
    setCurrentMenu(){
      this.$emit('setCurrentMenu', this.currentMenu)
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
.inactive-icon {
  filter: grayscale(100%); /* 회색 아이콘 */
}
.active-text {
  color: white;
}
.active-icon {
  filter: grayscale(0); /* 원래 색상 유지 */
}


</style>