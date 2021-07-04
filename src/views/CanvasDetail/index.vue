<template>
  <div class="auction-detail">
    <Introduce/>
    <Price/>
    <Change/>
  </div>
</template>

<script>
import axios from 'axios';
import Introduce from './components/Introduce.vue';
import Price from './components/Price.vue';
import Change from './components/Change.vue';

export default {
  components: {
    Introduce,
    Price,
    Change,
  },

  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const { tokenId, tokenIdx } = this.$route.query;
      if (tokenIdx) {
        this.tokenUrl = `https://ipfs.io/ipfs/${tokenIdx}`;
        const { data } = await axios({
          method: 'get',
          url: this.tokenUrl,
        });
        this.NFTDetail = data;
      }

      if (tokenId) {
        console.log(tokenId);
      }
    },
    toDetail() {
      this.$router.push(`/auction/detail/${this.tokenId}`);
    },
  }
}
</script>

<style lang="postcss" scoped>

</style>
