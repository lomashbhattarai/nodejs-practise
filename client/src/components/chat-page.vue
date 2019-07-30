<template>
    <div>
        <div>chat</div>
        <textarea v-model="message"></textarea>
        <button type="button" class="btn btn-primary" @click="sendMessage"> SEND</button>
    </div>
    
</template>

<script>
import io from 'socket.io-client';
export default {
    created(){
        this.socket.on('MESSAGE', (data) => {
            console.log("message")
            this.messages.push(data)
        })    
    },
    data(){
        return {
            port: process.env.PORT || 5150,
            socket: io(`localhost:5150`),
            message: '',
            messages: []    
        }
    },
    methods: {
        sendMessage(e) {
           e.preventDefault();
           this.socket.emit('SEND',{
               message: this.message
           });
           this.message = ''
        }
    },
}
</script>

