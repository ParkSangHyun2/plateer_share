import axios from 'axios';
import GoodsModel from '../models/GoodsModel';

const GoodsStoreModule =
    {
        namespaced: true,
        //
        state: {
            goodsList: {},
        },
        mutations: {
            setGoodsList: function (state, goodsList) {
                state.goodsList = goodsList;
            }
        },
        getters: {
            someData: (state, getters) => {
                return state.data + getters.anotherData;
            },
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
};

export default GoodsStoreModule;
