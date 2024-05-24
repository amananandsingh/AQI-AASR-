<template>
  <div class="container">
    <div class="air-quality-app">
      <header>
        <h1>Air Quality Index Guide</h1>
      </header>

      <section class="aqi-levels">
        <h1 style="color:yellow">Understanding AQI Levels</h1>
       
        <div class="level-descriptions">
          <div
            v-for="(level, index) in aqiLevels"
            :key="index"
            class="level-item"
            :style="{ backgroundColor: level.color }"
          >
            <h3>{{ level.name }}</h3>
            <p>{{ level.range }}</p>
            <p>{{ level.healthEffects }}</p>
          </div>
        </div>
      </section>
  
      <section class="tips">
        <h2><u>Tips for Protecting Yourself</u></h2>
        <ul>
          <li v-for="(tip, index) in tips" :key="index">
            {{ tip }}
          </li>
        </ul>
      </section>
    </div>
    </div>
  </template>
  
  <script>
  //import Carousel from "./components/carousel.vue"; // Replace with actual path
  //import LineChart from "./components/LineChart.vue"; // Replace with actual path
  
  export default {
    components: {
      //Carousel,
      //LineChart,
    },
    data() {
      return {
        slides: [
          {
            image: "./assets/aqi2.jpg",
            caption: "Clean air is essential for good health.",
          },
          {
            image: "https://example.com/image2.jpg",
            caption:
              "Air pollution can have serious consequences on our well-being.",
          },
        ],
        aqiLevels: [
          {
            name: "Good",
            range: "0-50",
            color: "#00e400",
            healthEffects:
              "Air quality is considered satisfactory, and air pollution poses little risk.",
          },
          {
            name: "Moderate",
            range: "51-100",
            color: "#FFCA4B",
            healthEffects:
              "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
          },
          {
            name: "Unhealthy for Sensitive Groups",
            range: "101-150",
            color: "#ff7e00",
            healthEffects:
              "Members of sensitive groups may experience health effects. The general public is not likely to be affected.It has direct affect to sensitive group.",
          },
          {
            name: "Unhealthy",
            range: "151-200",
            color: "#ff0000",
            healthEffects:
              "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
          },
          {
            name: "Very Unhealthy",
            range: "201-300",
            color: "#8f3f97",
            healthEffects:
              "Health alert: everyone may experience more serious health effects. Can cause problem in breathing for asthma patients",
          },
          {
            name: "Hazardous",
            range: "301+",
            color: "#7e0023",
            healthEffects:
              "Health warnings of emergency conditions. The entire population is more likely to be affected.Most unlikely conditions occur",
          },
        ],
        chartData: {
          labels: [
            "Good",
            "Moderate",
            "Unhealthy for Sensitive Groups",
            "Unhealthy",
            "Very Unhealthy",
            "Hazardous",
          ],
          datasets: [
            {
              label: "AQI Level",
              data: [50, 100, 150, 200, 300, 400],
              backgroundColor: [
                "#00e400",
                "#FFFF6E",
                "#ff7e00",
                "#ff0000",
                "#8f3f97",
                "#7e0023",
              ],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
        tips: [
          "Check the AQI regularly.",
          "Limit outdoor activities on high AQI days.",
          "Wear a mask when air pollution is high.",
          "Use public transportation or carpool to reduce emissions.",
          "Support policies that promote clean air.",
        ],
      };
    },
    
};
  
  </script>
  
  <style scoped>
  .air-quality-app {
    font-family: sans-serif;
    margin: 0 auto;
    max-width: 1200px;
  }
  .container{
    background-image: url("@/assets/pq.jpg"); 
    background-size: cover; 
    background-repeat: no-repeat; 
    min-height: 80vh; 
    display: flex;
    align-items: center; 
    justify-content: center;
  }
  
  header {
    background-color: #646b72;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
  }
  
  .aqi-levels .level-chart {
    height: 300px;
    margin-bottom: 3rem;
 
  }
  
  .aqi-levels .level-descriptions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    gap: 12rem;
    
  }
  
  .aqi-levels .level-item {
    padding: 1rem;
    border-radius: 5px;
    color: #ffffff;
    text-align: center;
  }
  
  .tips {
    margin-top: 8rem;
    font-display: bold;
    font-weight: 595;
    color: #070202;
  }
  
  .tips ul {
    list-style: lower-roman;
    padding-left: 1rem;
  }

  </style>