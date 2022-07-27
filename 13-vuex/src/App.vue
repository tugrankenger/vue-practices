<template>
  <div>
    <NewUser />
    <UserList />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NewUser from './components/NewUser.vue'
import UserList from './components/UserList.vue'
export default {
  name: 'App',
  components: {
    NewUser,
    UserList
  },

  created() {
    console.log(this.activeUser)
  },

  computed: {
    // ...mapGetters(["woodItems","activeUser"])

    ...mapGetters({
      agacElemanlari: "_woodItems",
      activeUser: '_activeUser'
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
