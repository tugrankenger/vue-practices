import { createStore } from 'vuex'

const store = createStore({
  state:{
    counter: 0,
    value: 0
  },
  getters:{
    getDoubleCounter(state){
      return state.counter * 2
    },
    stringCounter(state){
      return state.counter + ' clicked'
    },
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
    increaseCounter(state){
      state.counter ++
    },
    decreaseCounter(state){
      state.counter --
    },
    resetCounter(state){
      state.counter =  0
    },
    setValue(state,payload){
      state.value = payload
    }
  },
  actions:{
    increment({commit}){
      commit("increaseCounter")
    },
    decrement({commit}){
      commit("decreaseCounter")
    },
    incAsyc(context,payload){
      setTimeout(()=>{
        context.commit('increaseCounter')
      },payload.time)
    },
    setValueData({commit}, payload){
      commit('setValue',payload)
    }
  }
})

export default store