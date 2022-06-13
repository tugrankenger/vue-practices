<template>

  <div class="container pt-3">

   <div class="d-flex align-items-center gap-4">
     <router-link class="btn border" active-class="btn-primary" to="/">
      Home
    </router-link>

    <router-link class="btn border" active-class="btn-primary" to="/about">
      About
    </router-link>

    <router-link class="btn border" active-class="btn-primary" to="/details/555">
      Detail
    </router-link>
   </div>
    
    <router-view></router-view>
  </div>
</template>