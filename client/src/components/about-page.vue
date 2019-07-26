<template>
    <div>
        <p> This is a place for self improvement based on principle of self authoring and goal setting. </p>
        <div class="row">
            <label class="col-md-6"> Leave a message to lomashbhattarai1@gmail.com </label>
            <div class="col-md-6">
                <textarea rows="4" cols="50" class="border border-primary" v-model="msg"></textarea>
                <button type="button" class="btn btn-primary" @click="sendEmail"> Email Us</button>
            </div>
            
        </div>
        
       
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:''
        }
    },
    methods:{
        sendEmail(){
            this.axios.post('api/email',{
                email: "lomashbhattaraidd@gmail.com",
                subject: "message",
                text:this.msg,
            }).then( ({data}) => {
                console.log(data)
            })    
        }
    }

}
</script>

