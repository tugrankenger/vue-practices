const app = Vue.createApp({
    data(){
        return{
            showBorder:false,
            redBg:false,
            boxClass: "border blue",
            bgColor: "cyan",
        }
    },
    computed: {
        boxClasses(){
            return { border: this.showBorder, red:this.redBg}
        }
    }
});
app.mount('#app');