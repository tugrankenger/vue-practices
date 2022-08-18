<script setup>
import { reactive } from 'vue'
const state = reactive({
  todoList:[
    {
      id: new Date().getTime(),
      name: "Tugran",
      completed: false
    },
    {
      id: new Date().getTime(),
      name: "Penny",
      completed: false
    },
    {
      id: new Date().getTime(),
      name: "Sawyer",
      completed: false
    },
    {
      id: new Date().getTime(),
      name: "Desmond",
      completed: false
    }
  ]
})

</script>

<template>
  <div class="container">
    <div class="add-section">
      <input type="text" v-model="state.todoList.name">
    </div>
    <div class="list-section">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todoItem in state.todoList" :key="todoItem.id">
            <td>{{todoItem.id}}</td>
            <td :class="{completed: todoItem.completed}">{{todoItem.name}}</td>
            <td><input type="checkbox" v-model="todoItem.completed"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  table{
    width: 100%;
    height: auto;
    border-collapse: collapse;
    background: #fff;
  }
  table tr{
    border: 1px solid #efefef
  }
  table tr:hover:not(thead tr){
    background: #d2d2d2;
  }
  table th, tr, td{
    padding: 8px;
    text-align: left;
  } 
  table tr:nth-child(even){
    background: #efefef;
  }
  table th, td{
    padding-right: 50px;
  }

  td.completed{
    text-decoration: line-through;
  }
</style>