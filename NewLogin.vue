<!-- Login.vue -->
<template>

    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async login() {
        try {
         
          // Replace this with your actual authentication logic
          if (this.username === 'admin1' && this.password === 'password1') {
            // Simulate successful login
            this.$router.push('/dashboard'); // Redirect to dashboard after login
          } 
          if (this.username === 'aman' && this.password === 'password') {
            // Simulate successful login
            this.$router.push('/dashboard'); // Redirect to dashboard after login
          } 
          else {
            throw new Error('Invalid credentials. Please try again later.');
          }
        } catch (error) {
          this.error = error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>