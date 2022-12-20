import { createStore } from 'vuex'

const store = createStore({
  state:{
    counter:0
  },
  getters:{
    getDoubleCounter(state){
      return state.counter * 2
    },
    stringCounter(state){
      return state.counter + ' clicked'
    }
  },
  mutations:{
    // updateCounter(state, value){
    //   if(value == 0){
    //     state.counter = 0
    //   }
    //   state.counter += value
    // }
    increaseCounter(state){
      state.counter ++
    },
    decreaseCounter(state){
      state.counter --
    },
    resetCounter(state){
      state.counter =  0
    }
  }
})

export default store