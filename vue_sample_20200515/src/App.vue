<template>
    <div>
    <GoodsHeader></GoodsHeader>
    <br/><br/><br/>
    <CardContainer></CardContainer>
  </div>
</template>

<script>
import CardContainer from './components/container/CardContainer';
import GoodsHeader from './components/GoodsHeader';

export default {
  
  name: 'App',

  components: {
    CardContainer,
    GoodsHeader,
  },

  data: () => ({
    //
  }),
};
</script>
