const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            counter2:0,
        }
    },
    methods:{
        inc(){
            this.counter++;
        },
        dec(){
            this.counter--;
        },
        getCounterResult(){
            console.log('runned counter 1');
            return this.counter > 5 ? 'bigger than 5': 'smaller than 5';
        },
        inc2(){
            this.counter2++;
        },
        dec2(){
            this.counter2--;
        },
        getCounter2Result(){
            console.log('runned counter 2');
            return this.counter2 > 5 ? 'bigger than 5': 'smaller than 5';
        }
    }
}).mount("#app")