<template>
    <!-- <small class="d-flex justify-content-end mt-2 pe-2">There are {{ todoList.length }} item</small> -->
    <small class="d-flex justify-content-end mt-2 pe-2">There are {{itemCount}} items</small>
</template>

<script>
    export default{
        props:["itemCount"]
    }
</script>