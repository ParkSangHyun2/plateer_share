import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import GoodsModel from '../models/GoodsModel';

Vue.use(Vuex);

const GoodsStore = new Vuex.Store({
    //
    state: {
        goodsList: [],
    },
    mutations: {
        setGoodsList: function(state, goodsList) {
            state.goodsList = goodsList;
        }
    },
    actions: {
        loadGoodsDatas: async function (context) {
            let goodsList = await axios.get("http://localhost:3000/goods").then(response => {
                let goodsDatas = [];

                response.data.map((goods) => {
                    //
                    goodsDatas.push(
                        new GoodsModel(
                            goods.name,
                            goods.price,
                            goods.address,
                            goods.isPurchase,
                            goods.category,
                            goods.description,
                            goods.likeCount,
                            goods.image
                        )
                    );
                });

                return goodsDatas;
            });

            context.commit('setGoodsList', goodsList);
        }
    }
});

export default GoodsStore;