<template>
  <AppHeader />

  <div class="flex flex-row">
    <SideBar />

        <!-- main.js icersinde import ederek globalde yayinlamis olduk, appBookmarkList kalsorunu import ettik icersindeki Index.vue otomatik olarak alinmis oldu -->
    <appBookmarkList :items="bookmarkList" /> <!-- buraya Index.vue geliyor.  -->

  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue"
export default {
  data(){
    return{
      bookmarkList:[]
    }
  },
  components: {
    SideBar,
  },
  created(){
    this.$appAxios.get('/bookmarks?_expand=category&_expand=user').then((res)=>{
      console.log(res)
      this.bookmarkList = res?.data || []
    })
  },
}
</script>