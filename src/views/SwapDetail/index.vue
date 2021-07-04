<template>
  <div class="auction-detail">
    <Introduce
      :NFTDetail="NFTDetail"
    />
    <!-- <Price :auction="auction"/>
    <Change/> -->
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
// import { BigNumber } from 'ethers';
import Introduce from './components/Introduce.vue';
// import Price from './components/Price.vue';
// import Change from './components/Change.vue';
import { miningContract } from "@/eth/ethereum";


console.log()
export default {
  components: {
    Introduce,
    // Price,
    // Change,
  },

  data() {
    return {
      NFTDetail: {},
      auction: {
        lastPrice: 0,
        endAt: 0,
        startedAt: 0,
      },
    }
  },

  created() {
    this.getDetail();
  },

  methods: {
    async getDetail() {
      const { tokenId, tokenIdx } = this.$route.query;

      if (tokenId) {
        const result = await miningContract.functions.getInfoById(tokenId);
        console.log('token', result);
        const [ token ] = result;
        const { auction, tokenURI } = token;
        this.auction = auction;

        const { data } = await axios({
          method: 'get',
          url: tokenURI,
        });
        this.NFTDetail = data;
        // console.log('detail:', auction, tokenURI);
        // console.log('endAt:', new moment(this.auction.endAt * 1000).format('YYYY-MM-DD HH:mm:ss'));
      }

      // if (tokenIdx) {
      //   const { price, endTime, startTime } = this.$route.query;
      //   // this.auction.lastPrice = price
      //   // this.auction.endAt = endTime
      //   // this.auction.startedAt = startTime

      //   this.auction = {
      //     lastPrice: price,
      //     endAt: endTime,
      //     startedAt: startTime,
      //   }
      //   this.tokenUrl = `https://ipfs.io/ipfs/${tokenIdx}`;
      //   const { data } = await axios({
      //     method: 'get',
      //     url: this.tokenUrl,
      //   });
      //   this.NFTDetail = data;
      // }

    },
  }
}
</script>

<style lang="postcss" scoped>
.auction-detail {
  margin-bottom: 128px;
}
</style>
