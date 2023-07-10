<!-- это главный компонент:  -->

<template>
   <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
         <div class="navbar-nav">
            <router-link class="nav-link" :to="{name:'home'}">HOME</router-link>
            <router-link class="nav-link" :to="{name:'desks'}">DESKS</router-link>
         </div>
      </div>

   </nav>
   <div>

      <router-view></router-view>

   </div>


</template>


<script>
import Home from './components/Home.vue';
import Body from './components/Body.vue';
import About from './components/About.vue';

export default {
   data() {
      return {
         title: "App",

      }
   },

   components: {Home, Body, About}
}

</script>

<style scoped>

</style>
