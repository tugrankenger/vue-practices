<template>
    <ListSection :userList="userList" />
    <AddSection  @new-item="$emit('new-item', $event)"/>
   </template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue"

    export default{
    props: ["userList"],
    emits: ["new-item"],
    components: { ListSection , AddSection}
}
</script>