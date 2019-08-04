<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list subheader>
          <v-subheader>your Friends</v-subheader>
          <router-link :to="{ name: 'friendDetail' }">
          <v-list-tile
            v-for="friend in friends"
            :key="friend.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="friend.userName"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
           </router-link>
        </v-list>
        <v-divider></v-divider>
        <v-list subheader>
          <v-subheader>All members</v-subheader>
          
            <v-list-tile
                v-for="user in users"
                :key="user._id"
                avatar
            >   
                <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title v-html="user.userName"></v-list-tile-title>
                </v-list-tile-content>
            
                <v-list-tile-action>
                 <button type="button" class="btn btn-primary" @click="addFriend(user.userName)"> Add </button>
                </v-list-tile-action>
            </v-list-tile>
          
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapState } from 'vuex';
  export default {
    data () {
      return {
        users:[]
      }
    },
    computed:{
      ...mapState(['currentUser']),
      friends(){
        return this.currentUser.friends
      }
    },
    created(){
        this.axios.get('api/users').then(({data})=> {
                this.users = data
        });
    },
    methods:{
      addFriend(friend){
        this.axios.put(`api/users/${this.currentUser.userName}/${friend}`)
      }
    }
  }
</script>


<style>

</style>
