const state = {
  counter: 0,
}

const getters= {
  getDoubleCounter(state){
    return state.counter * 2
  },
  stringCounter(state){
    return state.counter + ' clicked'
  },
}

const mutations = {
  increaseCounter(state){
    state.counter ++
  },
  decreaseCounter(state){
    state.counter --
  },
  resetCounter(state){
    state.counter =  0
  },
}

const actions = {
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
}

export default{state, getters, mutations, actions}