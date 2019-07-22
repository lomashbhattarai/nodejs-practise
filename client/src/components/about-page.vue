<template>
    <div>
       <button type="button" class="btn btn-primary" @click="sendEmail"> Email Us</button>
    
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
        sendEmail(){
            axios.post('api/email',{
                email: "lomashbhattaraidd@gmail.com",
                subject: "test",
                text:"test is successful",
            }).then( ({data}) => {
                console.log(data)
            })    
        }
    }

}
</script>

