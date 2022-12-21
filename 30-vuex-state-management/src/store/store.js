import { createStore } from 'vuex'
import counter from './modules/counter'
const store = createStore({
  state:{
    value: 0
  },
  getters:{
    getValue(state){
      return state.value
    }
  },
  mutations:{
    // updateCounter(state, value){
    //   if(value == 0){
    //     state.counter = 0
    //   }
    //   state.counter += value
    // }
    setValue(state,payload){
      state.value = payload
    }
  },
  actions:{
    
    setValueData({commit}, payload){
      commit('setValue',payload)
    }
  },
  modules:{
    counter
  }
})

export default store