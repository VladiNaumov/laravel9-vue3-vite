<!-- это главный компонент:  -->

<template>
    <div class="container">

        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/body">Body</router-link>
        </p>

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
