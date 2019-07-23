<template>
  <v-app id="keep">
      <v-toolbar color="white" app absolute clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <router-link :to="{name: 'mainPage'}">
<!--           <span class="title ml-3 mr-5">Self&nbsp;<span class="font-weight-light">authoring Program</span></span> -->
        </router-link>
        <!-- <v-text-field
          solo-inverted
          flat
          hide-details
          label="Search"
          prepend-inner-icon="search"
        ></v-text-field> -->
        <v-spacer></v-spacer>
        <router-link :to="{ name: 'loginPage'}" v-if="!login">
          <span class="mr-4">{{ "login" }}</span>
        </router-link>
        <router-link :to="{ name: 'signupPage'}" v-if="!login">
          {{ "Sign Up" }}
        </router-link>
      </v-toolbar>
    <template v-if="login">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        clipped
        class="grey lighten-4"
        app
      >
        <v-list
          dense
          class="grey lighten-4"
        >
          <template v-for="(item, i) in items">
            <v-divider
              v-if="item.divider"
              :key="i"
              dark
              class="my-3"
            ></v-divider>
            
            <v-list-tile
              v-else
              :key="i"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">
                  <router-link :to="{ name: item.route}">
                  {{ item.text }}
                  </router-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            
          </template>
        </v-list>
      </v-navigation-drawer>
    </template>
    <v-content class="mt-5">
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: 'Notes', route: 'notePage' },
        { icon: 'touch_app', text: 'Lists' },
        { icon: 'touch_app', text: 'Friends', route: 'friendPage' },
        { icon: 'touch_app', text: 'Books', route: 'bookPage' },
        { divider: true },
        /* { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true }, */
        { icon: 'chat_bubble', text: 'Chat' },
        { icon: 'help', text: 'About', route: 'aboutPage' },
        { icon: 'settings', text: 'Settings' },
        
      ],
      login: false
    }),
    props: {
      source: String
    },
    components:{
      
    }
  }
</script>

<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
</style>