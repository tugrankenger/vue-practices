<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <p>User id: {{$route.params.id}}</p>
    <router-link 
      tag="button"
      class="btn btn-primary"
      :to="{name:'UserEdit', params:{id:$route.params.id}, query:{name:'tugran', surname:'kenger'}, hash:'#data'}"
    >Edit user</router-link>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style>

</style>