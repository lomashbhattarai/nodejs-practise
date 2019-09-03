<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <router-link :to="{name:'friendPage'}">
                     <h5> your friends</h5> 
                </router-link>
                <ul>
                    <li v-for="friend in friends" :key="friend._id">
                        {{friend.userName}}    
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <router-link :to="{name:'bookPage'}">
                    <h5> your books</h5> 
                </router-link>
                <ul>
                    <li v-for="book in books" :key="book._id">
                        <router-link :to="{name:'book'}"> {{book.name}} </router-link>    
                    </li>
                </ul>
            </div>
        </div>
         <h3> News Feed</h3>
         <v-card v-for="note in notes" :key="note._id"> 
            <v-card-title primary-title>
             <div>
                <h3 class="headline mb-0">{{ note.title}}</h3>
                <div>{{ note.description}} </div>
            </div>
            </v-card-title>
            
            <span> </span>
            <span> </span>
            
        </v-card>
        
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
               
            }
        },
        computed: {
            ...mapState(['currentUser']),
            notes(){
                return this.currentUser.feed
            },
            friends(){
                return this.currentUser.friends
            },
            books(){
                return this.currentUser.books
            }

        }

        
    }
</script>

<style>

</style>
