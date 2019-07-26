<template>
    <div class="container">
        <h3> </h3>
        <div class="row">
            <div class="col-md-6">
                <router-link :to="{name:'friendPage'}">
                    <!-- <h5> your friends</h5> -->
                </router-link>
                <ul>
                    <li v-for="friend in friends" :key="friend._id">
                        {{friend.userName}}    
                    </li>
                </ul>
            </div>
            <router-link :to="{name:'bookPage'}">
                <!-- <h5> your books</h5> -->
            </router-link>
            <ul>
                <li v-for="book in books" :key="book._id">
                    <router-link :to="{name:'book'}"> {{book.name}} </router-link>    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                friends: this.$store.state.friends,
                books: this.$store.state.books
            }
        },
        created(){
            /* this.axios.get('api/users').then(({data})=> {
                this.friends = data
            });
            this.axios.get('api/books').then(({data})=> {
                this.books = data
            }); */
        }
        
    }
</script>

<style>

</style>
