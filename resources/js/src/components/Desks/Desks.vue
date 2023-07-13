<template>
   <div class="container">
      <h1>DESKS</h1>

      <div class="row">

         <div class="col-lg-4" v-for="desk in desks">
            <div class="card mt-3">

               <router-link class="card-body" :to="{name:'showDesk', params: {deskId: desk.id}}">
                  <h4 class="card-title">{{ desk.name }}</h4>

               </router-link>
               <button type="button" class="btn btn-danger mt-3" @click="deleteDesk(desk.id)">DELETE</button>
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
   methods: {
      getAllDesks(){
         axios.get('/desks').then(response => {
            this.desks = response.data.data
         })
            .catch(error => {
               console.log(error)
               this.errored = true
            })
            .finally(() => {

            })
      },
      deleteDesk(id) {
         if (confirm('Haluutko varma poista sen?')) {
            axios.post('/desks/' + id, {
               _method: 'DELETE'
            }).then(response => {
               this.desks = []
               this.getAllDesks()
            })
               .catch(error => {
                  console.log(error)
                  this.errored = true
               })
               .finally(() => {

               })
         }
      }
   },
   mounted() {
      this.getAllDesks()
   }

}

</script>
