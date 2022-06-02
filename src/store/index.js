import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    favoritos: []

  },
  getters: {
  },
  mutations: {

    setStateUser(state, value) {
      state.user = value
    },

    setStateUsers(state, value) {
      state.users = value
    },

    setFavoritos(state, value) {
      

      state.favoritos = [
        ...state.favoritos, {
          gender: value.gender,
          nameFirst: value.name.first,
          nameLast: value.name.last,
          email: value.email,
          country: value.location.country,
          age: value.dob.age,
          registered: value.registered.date,
          phone: value.phone

        }
      ]
    },
    
    setDeleteFavoritos(state, value) {
      
      let newFavoritos = state.favoritos.filter(user => {
        
         return user.phone !== value
      })
      
      state.favoritos = newFavoritos
      
    }

  },
  actions: {
  },
  modules: {
  }
})
