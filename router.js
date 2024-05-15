import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
// import SignUp from './components/SignUp.vue';
import NewLogin from './components/NewLogin.vue';
//import { Carousel } from 'bootstrap';
import Carousel from './components/MyCarousel.vue';
import MyCard from './components/MyCard.vue';
//import Signup from './components/Signup.vue';
import MyFront from './components/MyFront.vue';
import MyFront3 from './components/MyFront3.vue';
const routes=[
          
    {
        path: '/login',
        name: 'newlogin',
        component: (NewLogin)
      },
      {
        path: '/front',
        name: 'newFront',
        component: (MyFront)
      },
      {
        path: '/front3',
        name: 'newFront3',
        component: (MyFront3)
      },
      {
        path: '/card',
        name: 'MyCard',
        component: (MyCard)
      },
      // {
      //   path: '/signup',
      //   name: 'MyCard',
      //   component: (Signup)
      // },
      {

        path: '/dashboard',
        name: 'Dashboard',
        component: (HelloWorld),
        meta: { requiresAuth: true } // Add this meta field for authenticated routes
      },
      {
        path: '/',
        name: 'MyCarousel',
        component: (Carousel)
      },


]


const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

export default router;