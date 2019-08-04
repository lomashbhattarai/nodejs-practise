<template>
    <div>
        <v-card> 
            <v-card-title primary-title>
             <div>
                <v-flex>
                    <v-text-field
                    label="Title"
                    solo
                    height="1"
                    v-model="title"
                ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-textarea
                    outlined
                    name="input-7-4"
                    label="description"
                    v-model="description"
                    ></v-textarea>
                </v-flex>
                
                <v-btn color="primary" fab small dark @click="addNote()">
                    <v-icon>save</v-icon>
                </v-btn>
            </div>
            </v-card-title>
        </v-card>  
        <v-card v-for="note in notes" :key="note._id"> 
            <v-card-title primary-title>
             <div>
                <v-layout>
                    <v-flex>
                        <h3 class="headline mb-0">{{ note.title}}</h3>
                        <div>{{ note.description}} </div>
                    </v-flex>
                    <v-flex>
                        <!-- <v-btn color="primary" fab small dark>
                            <v-icon>edit</v-icon>
                        </v-btn> -->
                        <v-btn color="primary" fab small dark @click="deleteNote(note._id)">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </div>
            </v-card-title>
        </v-card>
        <!-- 
        <v-btn class="ma-2" outlined large fab color="indigo" >
            <v-icon>edit</v-icon>
        </v-btn>   -->
        
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
            description: '',
            title: ''
            
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
                            "title":this.title,
                            "description": this.description,
                            "publish": true 
                        }).then(data => console.log(data))
        },
        deleteNote(noteId){
            this.axios.put(`/api/notes/${this.userName}/${ noteId }`)
                .then(data => console.log(data))
        }

    }
    

}
</script>

