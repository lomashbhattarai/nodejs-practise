<template>
    <div>
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
export default {
    created(){
        /* this.axios.get('api/notes').then( ({data}) => {
            console.log(data)
            this.notes = data
        }) */
    },
    data(){
        return {
            notes: this.$store.state.notes
        }
    }

}
</script>

