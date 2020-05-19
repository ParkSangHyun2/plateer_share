import Vue from 'vue';
import Vuex from 'vuex';
import GoodsStoreModule from "./GoodsStoreModule";
import MemberModule from "./MemberModule";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        goods: GoodsStoreModule,
        member: MemberModule,
    }
});

export default store;
