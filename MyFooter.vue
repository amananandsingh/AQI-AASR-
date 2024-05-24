<template> 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5 class="footer-title">ABOUT US</h5>
            <p>
              We are passionate about promoting clean air and providing
              accurate air quality information to help you make informed
              decisions about your health and environment.
            </p>
          </div>
          <div class="col-md-4">
         <h5 class="footer-title">Quick Links</h5>
         <ul >
              <li align="left">
                <!-- //link to other pages here -->
                <router-link to="/about">About</router-link>
              </li>
              <li align="left">
                <router-link to="/contact">Contact Us</router-link>
              </li>
              <li align="left">
          <router-link to="/resources">Resources</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 class="footer-title">Stay Connected</h5>
            <div class="social-links">
              <a href="#" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <p class="subscribe-text">Subscribe to our newsletter:</p>
            <form @submit.prevent="subscribe">
              <input type="email" v-model="email" placeholder="Enter your email" required>
              <button type="submit">Subscribe</button>
            </form>
            <p v-if="subscribed" class="success-message">Thank you for subscribing!</p>
          </div>
        </div>
        <div class="copyright">
          <p>
            © {{ new Date().getFullYear() }} Air Quality Project. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
   // import router from '@/router';
  export default {
    data() {
      return {
        email: "",
        subscribed: false
      };
    },
    methods: {
      subscribe() {
        // Replace this with your actual subscription logic
        // You might send the email to your backend for processing
        console.log("Email submitted:", this.email);
        this.subscribed = true;
        this.email = "";
        setTimeout(() => {
          this.subscribed = false;
        }, 3000); // Reset the message after 3 seconds
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #877171;
    color: #dad7dc;
    padding: 40px 0;
  }
  
  .footer-title {
    text-align: center;
    color: #f9f9f9;
    margin-bottom: 15px;
  }
  
  .social-links a {
    color: #fff;
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  .subscribe-text {
    margin-bottom: 10px;
  }
  
  .success-message {
    color: #4CAF50;
    font-weight: bold;
  }
  
  .copyright {
    text-align: center;
    padding-top: 20px;
  }
  </style>