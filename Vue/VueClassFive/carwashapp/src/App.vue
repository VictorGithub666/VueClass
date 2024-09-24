<template >
  <div class="w-100" >
    <!-- Bootstrap Dark Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Carwash</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" >Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >Services</a>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="ourcomponent='CarwashSplide'">50 Comments</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="ourcomponent='CarwashSplide2'">100 Comments</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <CarwashServices/>
    <component :is="ourcomponent"></component>
    <ContactUs/>
    

   
  </div>
  
 
</template>


<script>
import CarwashServices from './components/CarwashServices.vue';
import CarwashSplide from './components/CarwashSplide.vue';
import CarwashSplide2 from './components/CarwashSplide2.vue';
import ContactUs from './components/ContactUs.vue';

export default {
  name: 'App',
  data() {
    return {
      ourcomponent: '' // Default component to render
    };
  },


  components: {
   CarwashServices,
   CarwashSplide,
   CarwashSplide2,
   ContactUs
  }
}
</script>


