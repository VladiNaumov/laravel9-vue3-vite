<template>
   <div class="container">
      <h1>DESKS</h1>

      <div class="row">

         <div class="col-lg-4" v-for="desk in desks">
            <div class="card mt-3">
               <a href="#" class="card-body">
                  <h5 class="card-title">{{desk.name}}</h5>
               </a>
            </div>
         </div>

      </div>

      <div class="alert alert-danger" role="alert" v-if="errored">
         Data loading error!
      </div>

   </div>

</template>

<script>
import axios from 'axios';
export default {

   data() {
      return {
         desks: [],
         errored: false,
      }
   },
   mounted() {

      axios.get('/desks').then(response => {
         this.desks = response.data.data
      })
         .catch(error => {
            console.log(error)
            this.errored = true
         })
   }

}

</script>
