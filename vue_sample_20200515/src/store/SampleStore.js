import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const SampleStore = new Vuex.Store({
    //
    state: {
        data: 'init',
    },
    mutations: {
        setData: function (state, data) {
            state.data = data;
        }
    },
    actions: {
        actionSample: function (context, data) {
            //
            context.commit('setData', data);
        }
    }
});

export default SampleStore;
