<template>
  <div class="container">
    <div class="create-post">
        <input id="create-post" type="text" v-model="word">
        <input id="write-meaning" type="text" v-model="meaning">
        <button class="btn btn-primary ml-2" @click="createPost"> Add </button>
    </div>
    <hr>
    <p class = "error" v-if="error"> {{ error }}</p>
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group" v-for="(post,index) in posts"
        :item= "post"
        :index="index"
        :key="post._id" 
        @dblclick="deletePost(post._id)">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ post.text }}</h5>
              <p class="card-text">{{ post.createAt }}</p>
              <div> {{ post.meaning }} </div>
            </div>
          </div>
          
          
        </ul>
          </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data(){
    return {
      posts:[],
      error: '',
      word:'',
      meaning:''
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    } catch(err){
      this.error = err.message;
    }
  },
  methods:{
    async createPost(){
      await PostService.insertPost(this.word,this.meaning)
      this.posts = await PostService.getPosts();
    },

    async deletePost(id){
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts();
    }
  }

}
</script>

<style>

  div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

</style>