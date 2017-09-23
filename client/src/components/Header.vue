<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" id="logo-text"
      @click="navigateTo({name: 'root'})">
      TabTracker
    </v-toolbar-title> 
    
    <v-spacer></v-spacer>
    
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat>
        Welcome! You are logged in as {{ $store.state.user.email }}
      </v-btn>
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat
        @click="logout">
        Logout
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat
        @click="navigateTo({name: 'register'})">
        Sign up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}

</script>

<style scoped>
#logo-text {
  cursor: pointer;
}
#logo-text:hover {
  color: #006064;
}
</style>