<template>
    <div>
        <h3>Todos:</h3>
        <ul>
            <li v-for="todo in state.todos" :key="todo.id">
                <input type="checkbox" v-model="todo.completed">
                {{todo.title}}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
const state = reactive({
    todos:[
      {
        id:1,
        title:"todo-item-1",
        completed:"false"
      },
      {
        id:1,
        title:"todo-item-1",
        completed:"false"
      },
      {
        id:1,
        title:"todo-item-1",
        completed:"false"
      }
    ]
  })



</script>