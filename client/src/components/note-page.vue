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
        
        <v-btn class="ma-2" outlined large fab color="indigo" @click="addNote()">
            <v-icon>edit</v-icon>
        </v-btn> 
        <div>
            <input>
            <textarea></textarea>
        </div>   
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created(){
        console.log(this.tst)
        console.log(this.$store.state.currentUser.notes)
        /* this.axios.get('api/notes').then( ({data}) => {
            console.log(data)
            this.notes = data
        }) */
    },
    data(){
        return {
            tst: "gello",
            
        }
    },
    computed:{
        ...mapState(['currentUser']),
        userName(){
            return this.currentUser.userName
        },
        notes(){
            return this.currentUser.notes
        }
    },
    methods: {
        addNote(){
            this.axios.put(`/api/notes/${this.userName}`, {
                            "title":"hello there",
                            "description": "ddd",
                            "publish": true 
                        }).then(data => console.log(data))
        }

    }

}
</script>

