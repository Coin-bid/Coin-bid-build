<template>
  <div class="auction-detail">
    <Introduce/>
    <Price/>
    <Change/>
  </div>
</template>

<script>
import Introduce from './components/Introduce.vue';
import Price from './components/Price.vue';
import Change from './components/Change.vue';

export default {
  components: {
    Introduce,
    Price,
    Change,
  }
}
</script>

<style lang="postcss" scoped>

</style>
