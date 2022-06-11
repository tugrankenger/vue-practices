<template>
  <div class="container">
    <h3 class="text-center py-3">Todo App</h3>
    <hr class="mb-3">
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <ResultBar :itemCount="todoList.length" />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import TodoList from "@/components/TodoList";
import ResultBar from "@/components/ResultBar"
  export default{
    components:{
      AddSection,
      TodoList,
      ResultBar
    },
    created(){
      setTimeout(()=>{
        this.todoList = [
          {id:1, text:"Jon snow"},
          {id:2, text:"sansa stark"},
          {id:3, text:"tryion lannister"},
          {id:4, text:"tugran kenger"},
          {id:5, text:"cersei lannister"},
          {id:6, text:"ned stark"},
      ]
      },2000)
    },  
    data(){
      return{
        todoList:[]
      }
    },
    methods:{  
      deleteItem(todoItem){
        console.log(todoItem);
        // const matcIndex = this.todoList.findIndex((i) => i === todoItem);
        // console.log(matcIndex)
        // if(matcIndex > -1){
        //   this.todoList.splice(this.todoList[matcIndex], 1);
        // }

        this.todoList = this.todoList.filter(todo => todo !== todoItem);
      },
      addNewTodo(todo){
        console.log(event)
        this.todoList.push({
          id: new Date().getTime(),
          text: todo
        })
      }
    }
  }
</script>