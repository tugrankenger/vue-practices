const app = Vue.createApp({
    data(){
        return{
            todoList: [
                {"id":1, name:"tugran kenger", "completed":false},
                {"id":2, name:"john locke", "completed":false},
                {"id":3, name:"kate austen", "completed":false},
                {"id":4, name:"juliet burke", "completed":false},
                {"id":5, name:"desmond hume", "completed":false},
            ]
        }
    },
    methods:{
        addTodo(event){
            this.todoList.push({
                id: new Date().getTime(),
                name: event.target.value,
                completed:false,
            })
        },
        removeItem(todoItem){
            //console.log(todoItem)
            this.todoList = this.todoList.filter(todo => todo !== todoItem);
            
        }
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter((t) => t.completed).length;
        },
        unCompletedItemCount(){
            return this.todoList.filter((t) => !t.completed).length;
        }
    }
}).mount("#app");