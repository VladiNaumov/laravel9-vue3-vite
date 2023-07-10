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
import AppHome from './components/Home.vue';
import AppBody from './components/Body.vue';
import AppAbout from './components/About.vue';
import ShowDesk from "@/src/components/Desks/ShowDesk.vue";

export default {
   data() {
      return {
         title: "App",

      }
   },

   components: {ShowDesk, AppHome, AppBody, AppAbout}
}

</script>

<style scoped>

</style>
