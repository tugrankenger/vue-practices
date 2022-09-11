<script setup>

</script>

<template>
  <div class="container">
    <nav>
      <router-link :to="{name:'Home'}">Home</router-link> &nbsp;
      <router-link :to="{name:'About'}">About</router-link>
    </nav>
  </div>

  <router-view class="router-view" v-slot="{Component}">
    <!-- name="page-opacity" mode="out-in" -->
    <Transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style lang="scss" scoped>
  .page-opacity-enter-active,
  .page-opacity-leave-active{
    transition: 600ms ease all;
    background: rgb(225, 225, 225);
  }

  .page-opacity-enter-from,
  .page-opacity-leave-to{
    opacity: 0;
  }

  .page-slide-enter-active,
  .page-slide-leave-active{
    transition: 400ms ease all;
  }

  .page-slide-enter-from,
  .page-slide-leave-to{
    opacity: 0;
    transform: translateY(100px);
  }
</style>