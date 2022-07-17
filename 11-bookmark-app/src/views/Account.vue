<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar />
    <!-- <component :is="$route.meta.componentName" :items="bookmarkList" />  -->
    <div class="socket">
      <input type="text" @keydown.enter="SEND_MESSAGE">
    </div>
    <!-- <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadir!</div> -->
  </div>
</template>

<script>
import SideBar from '@/components/Account/SideBar'
import io from "socket.io-client"
export default {
  data() {
    return {
      bookmarkList: [],
    }
  },
  components: {
    SideBar
  },
  created(){
    this.$appAxios.get('/bookmarks?_expand=category&_expand=user').then((res)=>{
      this.bookmarkList = res?.data || []
    })
  },
  mounted() {
    this.$socket = io("http://localhost:2018")
    this.$socket.on("WELCOME_MESSAGE", this.WELCOME_MESSAGE)
  },
  methods: {
    WELCOME_MESSAGE(data){
    console.log(data)
    },
    SEND_MESSAGE(e){
      console.log(e.target.value)
      this.$socket.emit("SEND_MESSAGE",e.target.value) // sunucu tarafina inputtaki mesaji gonderiyoruz
    }
  },
}
</script>