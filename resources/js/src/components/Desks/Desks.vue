<template>
   <div class="container">
      <h1>DESKS</h1>

      <form>
         <div class="form-group">
            <label class="form-label">Enter board names...</label>
            <input type="text" v-model="name" class="form-control" placeholder="writede name">
         </div>
         <button type="button" class="btn btn-success mt-3" @click="addNewDesk">ADD</button>
      </form>

      <div class="alert alert-danger mt-3" role="alert" v-if="errored">
         Data loading error! <br>
         {{errors [0]}}
      </div>

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

   </div>

</template>

<script>
import axios from 'axios';

export default {

   data() {
      return {
         desks: [],
         errored: false,
         errors:[],
      }
   },
   methods: {
      getAllDesks() {
         axios.get('/desks').then(response => {
            this.desks = response.data.data
         })
            .catch(error => {
               console.log(error)
               this.errored = true
            })
            .finally(() => {
               this.errored = false
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
      },
      addNewDesk() {
         axios.post('/desks', {
            name: this.name,
         })
            .then(response => {
               this.name = ''
               this.desks = []
               this.getAllDesks()
            })
            .catch(error => {
               console.log(error)
               this.errors = []
               this.errors.push( error.response.data.errors.name[0])
               this.errored = true
            })
            .finally(() => {

            })
      }
   },
   mounted() {
      this.getAllDesks()
   }

}

</script>
