<template>
  <div class="container">
    <UserSection/>
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";
  export default{
    data() {
        return {
            provideData:{
              userList: ["tugranKenger","johnLocke","julietBurke","desmondHume"],
            }
        };
    },

    methods:{
      newItem(event){
        this.provideData.userList.push(event)
      }
    },

    provide(){
      return{
        userList: this.provideData.userList,
        newItem: this.newItem
      }
    },

    components: { UserSection }
}
</script>