<template>
    <ListSection />
    <AddSection  />
   </template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue"

    export default{
    //props: ["userList"],
    emits: ["new-item"],
    inject:["userList"],
    components: { ListSection , AddSection}
}
</script>