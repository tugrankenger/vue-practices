<template>
  <AppHeader />

  <div class="flex flex-row">
    <SideBar @category-changed="updateBookmarkList"/>

        <!-- main.js icersinde import ederek globalde yayinlamis olduk, appBookmarkList kalsorunu import ettik icersindeki Index.vue otomatik olarak alinmis oldu -->
    <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" /> <!-- buraya Index.vue geliyor.  -->
    <div v-else>Bookmark bulunmamaktadir!</div>
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
  methods:{
    updateBookmarkList(categoryId){
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then((res)=>{
        this.bookmarkList = res?.data || []
      })
    }
  }
}
</script>