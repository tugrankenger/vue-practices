<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <p>Name: {{$route.query.name}}</p>
    <p>Surname: {{$route.query.surname}}</p>
    <button class="btn btn-primary" @click="saved = true">Approved</button>
    <div style="height:1200px" ></div>
    <p id="data">Hash fragment</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        saved: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if(this.saved){
        next()
      }else{
        if(confirm('Do you want to leave this page?')){
          next()
        }else{
          next(false)
        }
      }
    }
  }
</script>

<style>

</style>