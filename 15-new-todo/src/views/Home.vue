<script setup>
import { reactive, computed, onMounted } from 'vue'
const state = reactive({
  todoList:[
    
  ],
  editState: false,
  editIndex: null,
})

const addTodo = (event) =>{
  state.todoList.push({
    id: new Date().getTime(),
    name: event,
    completed:false,
    editMode: false
  })
  localStorage.setItem("todo", JSON.stringify(state.todoList))
  state.todoList.name=""
}

const deleteTodo = (todoItem) =>{
  state.todoList = state.todoList.filter(item=> item !== todoItem)
  localStorage.setItem("todo", JSON.stringify(state.todoList))
  return state.todoList
}

const editBtn = (todoItem,index) =>{
  state.editState = !state.editState
  state.editIndex = index
  todoItem.editMode = true
}

const editTodoName = (editName, index) =>{
  state.todoList[index].name= editName
  localStorage.setItem("todo",JSON.stringify(state.todoList))
  state.editState = false
}

const completedItemCount = computed(()=>{
  return state.todoList.filter((item)=>item.completed).length
})

const unCompletedItemCount = computed(()=>{
  return state.todoList.filter((item)=> !item.completed).length
})

onMounted(()=>{
  let localTodos = localStorage.getItem("todo")
    state.todoList = JSON.parse(localTodos) || []
})
</script>

<template>
  <div class="container">
    <h3>Todo List</h3>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todoItem,index) in state.todoList" :key="todoItem.id">
            <td>{{todoItem.id}}</td>
            <td :class="{completed: todoItem.completed}">
              <input v-if="state.editState && state.editIndex == index"  type="text" v-model="todoItem.name" @keyup.enter="editTodoName(todoItem.name, index)">
            <span v-else="!todoItem.editMode">{{todoItem.name}}</span> </td>
            <td><input type="checkbox" v-model="todoItem.completed"></td>
            <td class="actions">  
              <button @click="editBtn(todoItem,index)">
                <img src="../assets/edit.svg" alt="">
              </button>
              <button @click="deleteTodo(todoItem)">
                <img src="../assets/trash.svg" alt="">
              </button>
            </td>
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
   input{
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(135, 135, 135);
  }
   input:focus{
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  
  .actions{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .actions button{
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 0;
  }
</style>