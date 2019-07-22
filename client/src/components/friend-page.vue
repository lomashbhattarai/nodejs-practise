<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list subheader>
          <v-subheader>Recent</v-subheader>
          <router-link :to="{ name: 'friendDetail' }">
            <v-list-tile
                v-for="friend in friends"
                :key="friend._id"
                avatar
            >
                
                <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title v-html="friend.userName"></v-list-tile-title>
                </v-list-tile-content>
            
                <v-list-tile-action>
                <v-icon :color="true ? 'teal' : 'grey'">chat_bubble</v-icon>
                </v-list-tile-action>
            </v-list-tile>
           </router-link>
        </v-list>

        <v-divider></v-divider>

        <v-list subheader>
          <v-subheader>Previous</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        friends: [],
        items2: [
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }
        ]
      }
    },
    created(){
        axios.get('api/users').then(({data})=> {
                this.friends = data
        });
    }
  }
</script>
content_copy
New Chat

<style>

</style>
