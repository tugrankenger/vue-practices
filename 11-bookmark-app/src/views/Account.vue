<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar />
    <component :is="$route.meta.componentName" :items="bookmarkList" /> 
    <!-- <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadir!</div> -->
  </div>
</template>

<script>
import SideBar from '@/components/Account/SideBar'
export default {
  data() {
    return {
      bookmarkList: []
    }
  },
  components: {
    SideBar
  },
  created(){
    this.$appAxios.get('/bookmarks?_expand=category&_expand=user').then((res)=>{
      this.bookmarkList = res?.data || []
    })
  }
}
</script>