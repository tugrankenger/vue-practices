<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" active-class="active-route"><a class="navbar-brand" href="#"><strong>Home</strong></a></router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/user" active-class="active-route">User</router-link>
          <!-- <router-link to="/user/julietburke" active-class="active-route"><a class="nav-item nav-link" href="#">User2 <span class="sr-only">(current)</span></a></router-link> -->
          <!-- <router-link to="userDetail" active-class="active-route"><a class="nav-item nav-link" href="#">User Detail</a></router-link> -->
          <!-- <router-link to="userEdit" active-class="active-route"><a class="nav-item nav-link" href="#">User Edit</a></router-link> -->
          <!-- <router-link to="userStart" active-class="active-route"><a class="nav-item nav-link" href="#">User Start</a></router-link> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style>
  .active-route{
    border-bottom: 2px solid #333;
  }
</style>