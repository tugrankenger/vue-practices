<template>
  <div>
    {{ $store.state.user.name }}
    <button @click="updateName">Fullname change</button>
    <!-- {{ $store.getters.woodItems }} -->
  </div>
</template>

<script>
export default {
  methods: {
    updateName() {
      this.$store.commit('changeName',{name:"artikin degistim ben"})
    },
  },
}
</script>