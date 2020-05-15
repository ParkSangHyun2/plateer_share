<template>
  <div>
    <slot name="calousels"></slot>
    <v-container>
      <h3 class="title content-title">최근 등록 상품</h3>
      <v-row no-gutters>
        <template v-for="goods in goodsList">
          <v-col cols="12" sm="4" :key="goods.id">
            <MyCard :goods-data="goods"></MyCard>
          </v-col>
        </template>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="12">
          <div class="text-center more-view">
            <v-btn outlined color="primary">더보기</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MyCard from "../MyCard";
import GoodsModel from '../../models/GoodsModel';
import axios from 'axios';

export default {
  props: {
    goodsDatas: Array
  },
  data: function() {
      return {
          goodsList:[],
      }
  },
  components: {
    MyCard
  },
  created: async function() {
    let goodsDatas = [];

    await axios.get("http://localhost:3000/goods").then(response => {
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
    });
    this.goodsList = goodsDatas;
  }
};
</script>
<style scoped>
</style>