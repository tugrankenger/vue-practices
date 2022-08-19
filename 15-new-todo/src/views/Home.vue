<script setup>
import { reactive, computed } from 'vue'
const state = reactive({
  todoList:[
    
  ]
})

const addTodo = (event) =>{
  state.todoList.push({
    id: new Date().getTime(),
    name: event,
    completed:false
  })
  state.todoList.name=""
}

const completedItemCount = computed(()=>{
  return state.todoList.filter((item)=>item.completed).length
})

const unCompletedItemCount = computed(()=>{
  return state.todoList.filter((item)=> !item.completed).length
})
</script>

<template>
  <div class="container">
    <div class="add-section">
      <input type="text"
      v-model="state.todoList.name"
      placeholder="Entry something..."
      @keyup.enter="addTodo(state.todoList.name)">
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
      <div class="completed-item-count">
        <span>Completed: {{completedItemCount}}</span>
        <span>Uncompleted:{{unCompletedItemCount}}</span>
      </div>
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
  .completed-item-count{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
  }
  .add-section{
    margin: 30px auto;
  }
  .add-section input{
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(135, 135, 135);
  }
  .add-section input:focus{
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
</style>