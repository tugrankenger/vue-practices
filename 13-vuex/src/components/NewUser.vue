<template>
  <div>
    <!-- {{ $store.state.user }} -->
    <ul>
      <li v-for="item in permission" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters({
      permission:"_permissions"
    })
  },

}
</script>