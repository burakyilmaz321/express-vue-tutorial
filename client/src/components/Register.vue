<template>
  <div>
    <h2>Register</h2> 
    <input v-model="email" type="email" name="email" placeholder="email">
    <input v-model="password" type="password" name="password" placeholder="password">
    <button @click="register">Register</button>  
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
</style>
