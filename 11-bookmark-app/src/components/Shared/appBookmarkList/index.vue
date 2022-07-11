<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <BookmarkListItem v-for="i in 10" :key="i" /> <!-- BookmarkListItem.vue icersindeki veriler dongu boyunca burada yer alacak. -->
    </div>
  </div>
</template>

<script>
import BookmarkListItem from "./BookmarkListItem"
export default {
  components: {
    BookmarkListItem
  }
}
</script>