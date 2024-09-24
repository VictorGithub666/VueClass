<template>
    <div class="d-flex flex-column bg-dark">
      <h2 class="d-block text-white">100 Comments</h2>
  
      <div class="my-5">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images" >
          <SplideSlide
            class="card mx-2"
            style="width: 18rem;"
            v-for="(service, index) in services"
            :key="index"
          >
            <div class="card-body">
              <h5 class="card-title">{{ service.id }}</h5>
              <p class="card-text" v-if="service.name">{{ service.name }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                {{ service.body }}
              </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Learn More</a>
              <a href="#" class="card-link">Book Now</a>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CarwashSplide2',
    data() {
      return {
        services: [], 
      };
    },
    created() {
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          this.services = response.data.slice(0, 100); 
        })
        .catch((error) => {
          console.error('There was an error fetching the data:', error);
        });
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  