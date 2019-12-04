import Vuex from 'vuex'
import Interface from './interface'
import Customer from './customer'

const createStore = () =>
  new Vuex.Store({
    modules: {
      Interface
    }
  })

export default createStore
