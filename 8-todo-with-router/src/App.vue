<template>
  <div class="container mt-5">
    <div class="d-flex align-items-center justify-content-center gap-4">
      <router-link class="btn border" active-class="bg-primary" to="/new">
      new
    </router-link>
    <router-link class="btn border" active-class="bg-primary" to="/todo">
      todo
    </router-link>
    <router-link class="btn border" active-class="bg-primary" to="/completed">
      completed
    </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>