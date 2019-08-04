<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      Escape the 1000+ friends on fb ..connect with just a few
      <v-card>
        <v-list subheader>
          <v-subheader>your Friends</v-subheader>
          
          <v-list-tile
            v-for="friend in friends"
            :key="friend.title"
            avatar
            @click=""
          >
          <router-link :to="{ name: 'friendDetail' }">
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
            </v-list-tile-avatar>
          </router-link>
            <v-list-tile-content>
              <v-list-tile-title v-html="friend.userName"></v-list-tile-title>
            </v-list-tile-content>
            <v-btn color="primary" fab small dark @click="removeFriend(friend.userName)">
                    <v-icon>delete</v-icon>
            </v-btn>
          </v-list-tile>
          
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
      },
      removeFriend(friend) {
        this.axios.delete(`api/users/${this.currentUser.userName}/${friend}`)
      }
    }
  }
</script>


<style>

</style>
