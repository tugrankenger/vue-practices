<template>
    <div>
        <input type="text" @keyDown.enter="addTodo">
        {{state.todos.title}}
    </div>
</template>

<script setup>
import { reactive } from 'vue';

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

  const addTodo = (title) =>{
    state.todos.push({
      id: state.todos.length +1,
      title: title,
      completed: "false"
    })
  }
</script>
