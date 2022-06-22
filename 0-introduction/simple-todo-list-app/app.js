const app = Vue.createApp({ // create app icerisine bir obje gonderilir.
    data(){
        return{
            todoText: null,
            todoList : [],
        };
    },
    methods: {
        addTodo(){
            this.todoList.push(this.todoText);
        },
    },
}).mount("#app");