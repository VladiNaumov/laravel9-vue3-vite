<template>
   <div class="container">
      <h1>ShowDesk</h1>

      <div class="row">

            <div class="form-group">
               <input type="text" @blur="saveName" v-model="name" class="form-control">
            </div>

      </div>

      <div class="alert alert-danger" role="alert" v-if="errored">
         Data loading error!
      </div>

   </div>

</template>


<script>
import axios from 'axios';
// TODO: сделать валидацию
import {required, maxLength} from "@vuelidate/validators";

export default {

   props:[
      'deskId'
   ],
   data() {
      return {
         name: null,
         errored: false,
      }
   },
   methods:{
      saveName(){
         axios.post('/desks/' + this.deskId, {
            _method: 'PUT',
            name: this.name
         }).then(response => {

         })
            .catch(error => {
               console.log(error)
               this.errored = true
            })
      }
   },
   mounted() {

      axios.get('/desks/' + this.deskId).then(response => {
         this.name = response.data.data.name
      })
         .catch(error => {
            console.log(error)
            this.errored = true
         })
   },
   validations: {
         name: {

         }
   }

}
</script>


<style scoped>

</style>
