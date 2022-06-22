const app = Vue.createApp({
    data(){
        return{
            fullName: "aa"
        }
    },
    methods:{
        updateValue(inputValue){
            //console.log(event.target.value);
            this.fullName = inputValue.target.value;
        }
    }
}).mount("#app");