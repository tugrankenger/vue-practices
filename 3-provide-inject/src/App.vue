<template>
  <div class="container">
    <UserSection :userList="userList" @new-item="userList.push($event)"/>
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";
  export default{
    data() {
        return {
            userList: ["tugranKenger","johnLocke","julietBurke","desmondHume"],
        };
    },

    components: { UserSection }
}
</script>