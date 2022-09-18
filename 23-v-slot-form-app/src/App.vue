<script setup>
  import {reactive} from 'vue'
import formHelper from './components/formHelper.vue'
const state = reactive({
  title: 'i am a dynamic slot title',
})
</script>

<template>
  <div>
    <form-helper :title="'tugrankenger'">
      <template v-slot:title>
        <div>
          {{state.title}}
        </div>
      </template>
      <template v-slot:form-header>
        <div>
          <h1>form Header</h1>
        </div>
      </template>
      <template v-slot:form-fields>
        <div>
          <h3>form-fields</h3>
          <input type="text"> &nbsp;
          <input type="password">
        </div>
      </template>
      <template v-slot:form-controls>
        <div>
          <button type="submit">Submit</button>
        </div>
      </template>
      <h2 slot="title">{{state.title}}</h2>
      <p slot="text">i am the paragraph text for the slot</p>
    </form-helper>
  </div>
</template>

<style scoped>

</style>
