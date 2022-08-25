<script setup>
import { reactive, computed, onMounted } from 'vue'
import Completed from './Completed.vue'
const state = reactive({
  todoList: [

  ],
  editActive: false,
  editIndex: null,
})

const addTodo = (event) => {
  state.todoList.push({
    id: new Date().getTime(),
    name: event,
    completed: false,
    editMode: false
  })
  localStorage.setItem("todo", JSON.stringify(state.todoList))
  state.todoList.name = ""
}

const deleteTodo = (todoItem) => {
  if (confirm('Do you want to delete this item?')) {
    state.todoList = state.todoList.filter(item => item !== todoItem)
    localStorage.setItem("todo", JSON.stringify(state.todoList))
    return state.todoList
  }
}

const editBtn = (todoItem, index) => {
  state.editActive = !state.editActive
  state.editIndex = index
  todoItem.editMode = true
}

const editTodoName = (editName, index) => {
  state.todoList[index].name = editName
  localStorage.setItem("todo", JSON.stringify(state.todoList))
  state.editActive = false
}

const completedItemCount = computed(() => {
  return state.todoList.filter((item) => item.completed).length
})

const unCompletedItemCount = computed(() => {
  return state.todoList.filter((item) => !item.completed).length
})

onMounted(() => {
  let localTodos = localStorage.getItem("todo")
  state.todoList = JSON.parse(localTodos) || []
})
</script>

<template>
  <div class="container">
    <h3>Todo List</h3>
    <div class="add-section">
      <input type="text" v-model="state.todoList.name" placeholder="Entry something..."
        @keyup.enter="addTodo(state.todoList.name)">
    </div>
    <div class="list-section">
      <div class="list-wrapper">
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
            <tr v-for="(todoItem, index) in state.todoList" :key="todoItem.id">
              <td>{{ todoItem.id }}</td>
              <td :class="{ completed: todoItem.completed }">
                <input v-if="state.editActive && state.editIndex == index" type="text" autofocus v-model="todoItem.name"
                  @keyup.enter="editTodoName(todoItem.name, index)">
                <span v-else="!todoItem.editMode">{{ todoItem.name }}</span>
              </td>
              <td><input type="checkbox" v-model="todoItem.completed"></td>
              <td class="actions">
                <button @click="editBtn(todoItem, index)">
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
          <span>Completed: {{ completedItemCount }}</span>
          <span>Uncompleted:{{ unCompletedItemCount }}</span>
        </div>
      </div>
      <div class="completed-wrapper">
        <Completed :todoListProps="state.todoList"/>
      </div>
    </div>
  </div>
</template>