<template>
    <div>
        <div v-for="(message,index) in messages" :key="index"> 
            <v-alert
        :dismissible="false"
        v-model="show"
        class="mb-4"
        :type=" index%2==0 ? 'primary' : 'success' "
        >
           <span> {{ message.userName }} :{{ message.message }} </span>
        </v-alert>
            
                    </div>
        <textarea v-model="message"></textarea>
        <button type="button" class="btn btn-primary" @click="sendMessage"> SEND</button>
    </div>
    
</template>

<script>
import io from 'socket.io-client';
import { mapState } from 'vuex';
export default {
    created(){
        this.socket.on('MESSAGE', (data) => {
            this.messages.push(data)
        });
        this.axios.get('/api/chat').then( ( {data} ) => {
            this.messages = data
        })    
    },
    data(){
        return {
            port: process.env.PORT || 5150,
            socket: io(`localhost:5150`),
            message: '',
            messages: [],
            show: true    
        }
    },
    computed:{
        ...mapState(['currentUser']),
        userName(){
            return this.currentUser.userName
        } 
    },
    methods: {
        sendMessage(e) {
           e.preventDefault();
           this.socket.emit('SEND',{
               userName: this.userName,
               message: this.message
           });
           this.message = ''
        }
    },
}
</script>

