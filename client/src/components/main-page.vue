<template>
    <div class="container">
        <h3> Your Space</h3>
        <div class="row">
            <div class="col-md-6">
                <h5> your friends</h5>
                <ul>
                    <li v-for="friend in friends" :key="friend._id">
                        {{friend.userName}}    
                    </li>
                </ul>
            </div>
            <h5> your books</h5>
            <ul>
                <li v-for="book in books" :key="book._id">
                    <router-link :to="{name:'book'}"> {{book.name}} </router-link>    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                friends:[],
                books:[]
            }
        },
        created(){
            axios.get('api/users').then(({data})=> {
                this.friends = data
        });
        axios.get('api/books').then(({data})=> {
                this.books = data
        });
        }
        
    }
</script>

<style>

</style>
