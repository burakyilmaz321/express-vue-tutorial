<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" id="logo-text"
      @click="navigateTo({name: 'root'})">
      TabTracker
    </v-toolbar-title> 
    
    <v-spacer></v-spacer>
    
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn flat
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