<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <p>Name: {{$route.query.name}}</p>
    <p>Surname: {{$route.query.surname}}</p>
    <div style="height:1200px" ></div>
    <p id="data">Hash fragment</p>
  </div>
</template>

<script>
  export default{
    
  }
</script>

<style>

</style>