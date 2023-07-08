<!-- это главный компонент:  -->

<template>
   <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
         <div class="navbar-nav">
            <router-link class="nav-link" to="/">HOME</router-link>
            <router-link class="nav-link" to="/desks">DESKS</router-link>
         </div>
      </div>

   </nav>
   <div>

      <router-view></router-view>

   </div>


</template>


<script>
import AppHome from './components/Home.vue';
import AppBody from './components/Body.vue';
import AppAbout from './components/About.vue';

export default {
   data() {
      return {
         title: "App",

      }
   },

   components: {AppHome, AppBody, AppAbout}
}

</script>

<style scoped>

</style>
