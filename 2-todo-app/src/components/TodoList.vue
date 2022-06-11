<template>
    <ul class="list-group mt-3">
        <!-- <li v-for="todoItem in todoList" :key="todoItem.id"
            class="list-group-item d-flex justify-content-between align-items-center">
            <span>{{todoItem.text}}</span>
            <button @click="deleteItem(todoItem)" class="btn btn-sm btn-danger">Remove</button>
        </li> -->
        {{myData}}
        <todoListItem @delete-todo-item ="$emit('delete-todo-item', $event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem" />
    </ul>
</template>

<script>
    import TodoListItem from "@/components/TodoListItem"; 
    export default{
        props:["myData"],

        // data(){
        //     return{
        //         myData: ""
        //     }
        // },

        // props:{
        //     myData:{
        //         type: stringify,
        //         required: false,
        //         default: ""
        //     }
        // },

        components:{
            TodoListItem,
        }
    }
</script>