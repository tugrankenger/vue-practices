<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>{{item.text}}</span>
            <button @click="$emit('delete-todo-item',item)" class="btn btn-sm btn-danger">Remove</button>
        </li>
</template>

<script>
    export default{
        props: ["item"]
    }
</script>