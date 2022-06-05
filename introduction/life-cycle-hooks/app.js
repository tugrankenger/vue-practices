const app = Vue.createApp({
    data(){
        return{
            title: "test title",
            itemList: [],
        }
    },
    beforeCreate() {
        console.log("beforeCreate runned")
    },
    created() {
        console.log("created runned");
        setTimeout(()=>{
            this.itemList = [1,2,3,4,5,6,7,8];
        },2000)
    },
    beforeMount() {
        console.log("beforeMount runned")
    },
    mounted() {
        console.log("mounted runned")
    },
    beforeUpdate(){
        console.log("beforeUpdate runned")
    },
    updated() {
        console.log("updated runned")
    },
    beforeUnmount() {
        console.log("beforeUnmount runned")
    },
    unmounted() {
        console.log("unmounted runned")
    },
});

setTimeout(()=>{
    app.unmount();
},5000)

app.mount("#app");