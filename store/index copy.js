import Vuex from "vuex";
import auth from './modules/auth'
import medications from './modules/medications'
import history from './modules/history'

const createStore = () => {
  return new Vuex.Store({
    modules: { auth:auth, medications:medications, history:history },
  });
}

export default createStore;