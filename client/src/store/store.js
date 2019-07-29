import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        currentUser: {},
        token: '',
        login: false
     },
     mutations:{
         setUser(state, user) {
            state.currentUser = user
         },
         setToken(state, token) {
            state.token = token
         },
         setLogin(state, status) {
            state.login = status
         }
     },
     actions: {
         login({ commit },user) {
            return axios.post('api/login',user).then( ({data}) => {
                console.log(data)
                localStorage.token = data.token
                if(data.status= true){
                  commit('setLogin', true)
                  commit('setUser',data.user)
                  commit('setToken', data.token)
                }
              })
         }
     }
})

export default store;
