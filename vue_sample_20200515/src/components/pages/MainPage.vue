<template>
  <CardContainer>
    <template v-slot:calousels>
      <Calousels></Calousels>
    </template>
  </CardContainer>
</template>
<script>
import CardContainer from '../container/CardContainer';
import Calousels from '../Caloucsels';

export default {
    components: {
        CardContainer,
        Calousels,
    }
};
</script>
<style scoped>
</style>