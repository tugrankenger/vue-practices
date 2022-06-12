<template>
  <!-- <ModalDemo :onSave="onSave" :title="'modal title via props'" :content="content" /> -->
  <ModalDemo >
    <template #title>
      <h3>title via slot</h3>
    </template>
    <template  #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt expedita magnam dignissimos unde culpa omnis adipisci? Ullam esse, inventore doloremque odit unde atque maxime harum rerum ducimus at quae.
    </template>

    <template #default>
      <span>default value</span>
    </template>
  </ModalDemo>
</template>

<script>
  import ModalDemo from "@/components/ModalDemo";
  export default{
    components: {ModalDemo},

    data(){
      return{
        content: `<h3 class="text-primary">title</h3>`
      }
    },

    methods:{
      onSave(){
        alert("saved!");
      }
    }
  }
</script>