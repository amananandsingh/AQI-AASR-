<template>
    <div class="app">
      <div class="hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <h1 class="hero-title">Breathe Easy, Breathe Clean</h1>
          <p class="hero-description">
            Understanding Air Quality: The Key to a Healthier Future: Explore the Air Quality Index (AQI) and learn how to protect yourself.
          </p>
          <button class="hero-button" @click="scrollToAbout">Learn More</button>
          <button class="hero-button1" @click="scrollToAction">Action</button>

        </div>
      </div>
  
      <section class="about" id="about">
        <h2 class="section-title">What is the Air Quality Index (AQI)?</h2>
        <p class="section-description">
          The Air Quality Index (AQI) is a number that reports the quality of air in a certain area. It is based on the concentration of five major air pollutants regulated by the Environmental Protection Agency (EPA):
          The AQI is a standardized system used to measure and report air quality in terms that are easy to understand. It evaluates pollutants such as ground-level ozone, particulate matter, carbon monoxide, sulfur dioxide, and nitrogen dioxide. The AQI scale ranges from 0 to 500, with higher values indicating greater levels of air pollution and higher health risks.
        </p>
        <ul class="pollutant-list">
          <li><b>Ground-level ozone🟩</b></li>
          <li><b>Carbon monoxide🟧</b></li>
          <li><b>Sulfur dioxide🟨</b></li>
          <li><b>Nitrogen dioxide🟥</b></li>
          <li><b>Particulate matter🟪</b></li>
        </ul>
      </section>

      <section class="action" id="action">
        <h2 class="section-title">First Things First</h2>
        <p class="section-description">
            Join us in our mission to improve air quality and protect public health. Stay informed by regularly checking the AQI in your area, support policies aimed at reducing air pollution, and contribute to a cleaner, healthier environment through sustainable practices. Together, we can breathe easier and live better.
        </p>
      </section>

  <!-- // -->
      <section class="benefits">
        <h2 class="section-title">Benefits of Understanding AQI</h2>
        <div class="carousel-container">
          <div class="carousel" v-swipeable="{
            threshold: 40,
            onSwipeRight: () => previousSlide(),
            onSwipeLeft: () => nextSlide(),
          }">
            <div class="slide" v-for="(benefit, index) in benefitsData" :key="index">
              <div class="benefit-content">
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-description">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
          <button @click="previousSlide" class="carousel-control left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="nextSlide" class="carousel-control right">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <!-- // -->
      <section class="challenges">
        <h2 class="section-title">Challenges Regarding AQI</h2>
        <div class="carousel-container">
          <div class="carousel" v-swipeable="{
            threshold: 40,
            onSwipeRight: () => previousSlide(),
            onSwipeLeft: () => nextSlide(),
          }">
            <div class="slide" v-for="(challenges, index) in chaallengesData" :key="index">
              <div class="challenges-content">
                <h3 class="challenges-title">{{ challenges.title }}</h3>
                <p class="challenges-description">{{ challenges.description }}</p>
              </div>
            </div>
          </div>
          <button @click="previousSlide" class="carousel-control left">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="nextSlide" class="carousel-control right">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
  <!-- // -->
      <section class="resources">
        <h2 class="section-title">Resources and Tools</h2>
        <div class="resources-content">
          <p>Explore these resources for more information and tools to protect yourself and your family:</p>
          <ul class="resource-list">
            <li>
              <a href="https://www.aqi.in/dashboard/india/delhi/new-delhi" target="_blank">New Delhi Air Quality Index Website</a>
            </li>
            <li>
              <a href="https://www.airnow.gov/" target="_blank">AirNow Website</a>
            </li>
            <li>
              <a href="https://www.weather.gov/airquality" target="_blank">National Weather Service Air Quality Information</a>
            </li>
          </ul>
        </div>
      </section>
  
      <footer class="footer">
        <p>© 2024 Air Quality Awareness</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { useSwipeable } from 'vue-swipeable';
  
  export default {
    setup() {
      const heroImage = ref('./assets/hero-background.jpg'); // Replace with your actual image path
      const currentSlide = ref(0);
      const benefitsData = ref([
        {
          title: 'Improved Health:',
          description: 'Knowing the AQI helps you make informed decisions to reduce your exposure to pollutants, protecting your respiratory and cardiovascular health.'
        },
        {
          title: 'Environmental Awareness:',
          description: 'Understanding air quality allows you to be more conscious of your environmental impact and take actions to reduce pollution.'
        },
        {
          title: 'Informed Choices:',
          description: 'The AQI helps you plan activities, choose transportation options, and take necessary precautions on days with poor air quality.'
        },
        {
          title: 'Educational Resource:',
          description: 'Schools and universities can use AQI data to educate students about environmental science and the importance of air quality, fostering a new generation of environmentally conscious citizens.'
        },
        {
          title: 'Predictive Capability:',
          description: 'Some areas use AQI to predict future air quality. By modeling current levels, forecasted AQI provides reasonable predictions for air quality a few days ahead. This helps people plan their activities accordingly.'
        }
      ]);
//----here
    const chaallengesData = ref([
        {
          title: 'Data Accuracy:',
          description: 'The accuracy of AQI readings depends on the number and placement of monitoring stations. Sparse coverage can result in less reliable data for certain areas.'
        },
        {
          title: 'Response Time:',
          description: 'Real-time data is essential, but delays in reporting can affect the timeliness of the information, especially during sudden pollution spikes.'
        },
        {
          title: 'Public Engagement:',
          description: 'Ensuring that the public consistently uses and understands AQI data requires ongoing education and outreach efforts.'
        }
      ]);


//--here
      const scrollToAction = () => {
        document.getElementById('action').scrollIntoView({ behavior: 'smooth' });
      };
     
      const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
      };
  
      const nextSlide = () => {
        currentSlide.value = (currentSlide.value + 1) % benefitsData.value.length;
      };
  
      const previousSlide = () => {
        currentSlide.value = (currentSlide.value - 1 + benefitsData.value.length) % benefitsData.value.length;
      };
  
      onMounted(() => {
        useSwipeable('.carousel', {
          threshold: 40,
          onSwipeRight: () => previousSlide(),
          onSwipeLeft: () => nextSlide()
        });
      });
  
      return {
        heroImage,
        currentSlide,
        benefitsData,
        chaallengesData,
        scrollToAbout,
        scrollToAction,
        nextSlide,
        previousSlide
      };
    }
  };
  </script>
  
  <style scoped>
  .app {
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f4f4f4;
    color: #333;
  }
  
  .hero {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .hero-image {
    background-image:url("@/assets/aqi2.jpg");
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: rgb(23, 27, 2);
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .hero-button {
    padding: 1rem 2rem;
    background-color: #ede213;
    color: rgb(24, 4, 4);
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .hero-button1 {
    padding: 1rem 1rem;
    background-color: #2ee73d;
    color: rgb(24, 4, 4);
    border: none;
    border-radius: 9px;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .section-title {
    background-image:url("@/assets/aqi2.jpg");
    font-size: 2rem;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .section-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .pollutant-list {
    list-style: disc;
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .benefits {
    background-color: #addad9;
    padding: 5rem 3;
  }
  .challenges {
    background-color: #a4b6d7;
    padding: 5rem 3;
  }
  
  .carousel-container {
    position: relative;
    width: 85%;
    margin: 0 auto;
  }
  
  .carousel {
    display: flex;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
  
  .slide {
    flex: 0 0 auto;
    width: 100%;
    padding: 2rem;
    scroll-snap-align: start;
    background-color: #d6e85d;
    margin-right: 1rem;
  }
  
  .benefit-content {
    text-align: center;
  }
  
  .benefit-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .benefit-description {
    font-size: 1.1rem;
  }

  .challenges-content {
    text-align: center;
  }
  
  .challenges-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .challenges-description {
    font-size: 1.1rem;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    background-color: #ffffff;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel-control:hover {
    opacity: 1;
  }
  
  .carousel-control.left {
    left: 1rem;
  }
  
  .carousel-control.right {
    right: 1rem;
  }
  
  .resources {
    background-color: #c75edf;
    padding: 3rem 0;
  }
  
  .resources-content {
    text-align: center;
  }
  
  .resource-list {
    list-style: disc;
    margin-top: 2rem;
  }
  
  .footer {
    text-align: center;
    padding: 1rem 0;
    background-color: #333;
    color: rgb(228, 232, 34);
  }
  </style>