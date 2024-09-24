import { createApp } from 'vue';
import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';


import '@splidejs/vue-splide/css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create the Vue app instance
const app = createApp(App);
app.use( VueSplide );


// Mount the app to the DOM
app.mount('#app');
