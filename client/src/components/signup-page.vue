<template>
    <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Sign Up</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name="firstName" label="first Name"  v-model="firstName"></v-text-field>
            <v-text-field prepend-icon="person" name="lastName" label="last Name" v-model="lastName"></v-text-field>
            <v-text-field prepend-icon="lock" name="email" label="Email" v-model="email"></v-text-field>
            <v-text-field prepend-icon="person" name="Username" label="Username" v-model="userName"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="createUser">Sign Up</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
          
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            firstName: '',
            lastName: '',
            password: '',
            userName: '',
            email: ''
        }
    },
    methods:{
       createUser(){
           axios.post('api/users',{
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password,
                userName: this.userName,
                email: this.email

           }).then( ({data}) => {
               console.log("user created")
               console.log(data)
           } )
       } 
    }
}
</script>

<style>

</style>
