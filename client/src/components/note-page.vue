<template>
    <div>
        <v-card v-for="note in notes" :key="note._id"> 
            <v-card-title primary-title>
             <div>
                <h3 class="headline mb-0">{{ note.title}}</h3>
                <div>{{ note.description}} </div>
                <v-btn color="primary" fab small dark>
                    <v-icon>edit</v-icon>
                </v-btn>
            </div>
            </v-card-title>
            
            <span> </span>
            <span> </span>
            
        </v-card>
        
        <v-btn class="ma-2" outlined large fab color="indigo" @click="addNewNote">
            <v-icon>edit</v-icon>
        </v-btn>    
    </div>
</template>

<script>
export default {
    created(){
        /* this.axios.get('api/notes').then( ({data}) => {
            console.log(data)
            this.notes = data
        }) */
    },
    data(){
        return {
            notes: this.$store.state.notes || [],
            userName: this.$store.state.userName
        }
    },
    methods:{
        addNewNote(){
        this.axios.put(`api/notes/darwin`,
            { title: 'hey', description: 'test 1', publish: true })
    }
    }
    

}
</script>

