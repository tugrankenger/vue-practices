<template>
  <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Register</h3>
      <input v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3" />
      <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
      <button @click="onSave" class="default-button">Kayıt ol</button>
      <span class="text-center mt-3 text-sm">
        Zaten Üyeyim,
        <router-link :to="{name:'LoginPage'}" class="text-red-900 hover:text-black">Giriş yap!</router-link>
      </span>
    </div>
</template>

<script>
import router from '@/router'
import CryptoJS from "crypto-js"
  export default({
    data(){
      return {
        userData:{
          username: null,
          fullname: null,
          password: null
        }
      }
    },
    methods:{
      onSave(){
        const password = this.userData.password
        const cryptedPassword = CryptoJS.HmacSHA1(password, this.$store.getters._saltKey).toString()
        this.userData.password = cryptedPassword

        // const decryptedPassword = CryptoJS.AES.decrypt(cryptedPassword,key).toString(CryptoJS.enc.Utf8)
        // console.log(decryptedPassword)

        this.$appAxios.post('/users', this.userData).then((res) =>{
          console.log(res)  
          router.push({name:"HomePage"})
        })
        console.log(this.userData)
      }
    }
  })
</script>