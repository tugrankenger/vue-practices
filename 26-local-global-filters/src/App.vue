<script>
  export default{
    data(){
      return{
      localFilterText: "local filter with computed",
      name:"tugrankenger"
      }
    },
    computed:{
      doUpper(){
        return this.localFilterText.toUpperCase()
      }
    }
  }
</script>

<template>
  <div>
    <h3>Local and Global Filters with computed</h3>
    <hr>
    <p>{{doUpper}}</p>
    <hr>
    <p>{{$filters.textLength(name)}}</p>
  </div>
</template>

<style>

</style>