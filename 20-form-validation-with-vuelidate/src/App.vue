<script setup>
// import BaseInput from './components/BaseInput.vue';
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email, sameAs } from '@vuelidate/validators'

const formData = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
})

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(10) },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAs: sameAs(formData.password) }
  }
})

const v$ = useVuelidate(rules, formData)

const submitForm = async (e) => {
  const result = await v$.value.$validate()
  if (result) {
    alert("succes, form submitted")
    e.target.reset()
  } else {
    alert("Error, please check all form sections")
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="input-wrap">
      <input label="Username" v-model="formData.username" type="text" placeholder="Username" />
      <p v-for="error in v$.username.$errors" :key="error.$uid">
        {{error.$property}} - {{error.$message}}
      </p>
      <input label="Email" v-model="formData.email" type="email" placeholder="Email" />
      <p v-for="error in v$.email.$errors" :key="error.$uid">
        {{error.$property}} - {{error.$message}}
      </p>
      <input label="Password" v-model="formData.password" type="password" placeholder="Password" />
      <p v-for="error in v$.password.$errors" :key="error.$uid">
        {{error.$property}} - {{error.$message}}
      </p>
      <input label="Confirm Password" v-model="formData.confirmPassword" type="password"
        placeholder="Confirm Password" />
      <p v-for="error in v$.confirmPassword.$errors" :key="error.$uid">
        {{error.$property}} - {{error.$message}}
      </p>
      <!-- {{formData.username}} -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;

  input {
    padding: 4px 12px;
    margin: 10px 0;
  }
}
</style>