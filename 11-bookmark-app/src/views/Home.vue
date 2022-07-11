<template>
  <AppHeader />

  <div class="flex flex-row">
    <SideBar />

        <!-- main.js icersinde import ederek globalde yayinlamis olduk, appBookmarkList kalsorunu import ettik icersindeki Index.vue otomatik olarak alinmis oldu -->
    <appBookmarkList /> <!-- buraya Index.vue geliyor.  -->

  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue"
export default {
  components: {
    SideBar,
  }
}
</script>