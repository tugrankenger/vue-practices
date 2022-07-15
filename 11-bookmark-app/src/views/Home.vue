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
    this.fetchData();
  },
  methods:{
    fetchData(){
      this.$appAxios.get('/bookmarks?_expand=category&_expand=user').then((res)=>{
        this.bookmarkList = res?.data || []
      });

    // bookmark olarak eklediklerimizi cekmek icin user_bookmarks uzerinden cekelim
    this.$appAxios.get('/user_bookmarks/?_expand=bookmark&_expand=user').then((res)=>{
      this.$store.commit("setBookmarks",res?.data)
    });

    // like olarak eklediklerimizi cekmek icin user_likes uzerinden cekelim
    this.$appAxios.get('/user_likes/?_expand=bookmark&_expand=user').then((res)=>{
      this.$store.commit("setLikes", res?.data)
    })
    },
    updateBookmarkList(categoryId){
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then((res)=>{
        this.bookmarkList = res?.data || []
      })
    }
  }
}
</script>