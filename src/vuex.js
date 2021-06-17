import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

const state = {
    user: null
};

const store = new VueX.Store({
    state,
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        }
    },
    mutations: {
        user(state, user){
          state.user = user
}
    }

});

export default store;