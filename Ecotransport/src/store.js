import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)


// el store de vuex usuando el plugin de persistencia vuex-persistedstate
export default new Vuex.Store({
        state: {
            backURL: 'http://localhost:8080',
            
        },
    });
