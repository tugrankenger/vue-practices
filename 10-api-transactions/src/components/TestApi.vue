<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const state = reactive({
  url: "https://jsonplaceholder.typicode.com/todos",
  todoList: null
})

const axiosInstance = axios.create({
  baseURL:state.url
})

axiosInstance.get(state.url).then((res) => {
  state.todoList = res.data;
  console.log(state.todoList)
})
</script>

<template>
  <div class="container">
    <table>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>COMPLETED</th>
      </tr>
      <tr v-for="todo in state.todoList">
        <td>{{todo.id}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.completed}}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #d2d2d2;
  padding: 8px;
  text-align: left;
}

tr:nth-child(even) {
  background: #efefef;
}
</style>