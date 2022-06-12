<template>
  <ModalDemo :onSave="onSave" :title="'modal title via props'" :content="content" />
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