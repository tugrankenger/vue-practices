import { createStore } from 'vuex'
import counter from './modules/counter'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
const store = createStore({
  state:{
    value: 0
  },
  getters,
  mutations,
  actions,
  modules:{
    counter
  }
})

export default store