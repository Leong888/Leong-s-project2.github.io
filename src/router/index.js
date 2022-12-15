import Vue from "vue";
import Router from "vue-router";
import Map from "../components/Map.vue";
import Music from "../components/Music.vue"
import Visualisation from "../components/Visualisation.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Map",
      name: "Map",
      component: Map
    },
    
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Visualisation',
      name: 'Visualisation',
      component: Visualisation
    }
  ]
});
