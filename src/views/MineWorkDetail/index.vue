<template>
  <div class="auction-detail">
    <Introduce
      :NFTDetail="NFTDetail"
      :isInOrder="isInOrder"
    />
    <!-- <Price :auction="auction"/>
    <Change/> -->
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
// import { miningContract } from '@/eth/ethereum';
import { miningContract } from "@/eth/ethereum";
// import { BigNumber } from 'ethers';
import Introduce from './components/Introduce.vue';
// import Price from './components/Price.vue';
// import Change from './components/Change.vue';

console.log(miningContract.functions)
export default {
  components: {
    Introduce,
    // Price,
    // Change,
  },

  data() {
    return {
      NFTDetail: {},
      isInOrder: false,
      auction: {
        lastPrice: 0,
        endAt: 0,
        startedAt: 0,
      },
    };
  },

  created() {
    this.getDetail();
  },

  methods: {
    async getDetail() {
      const { tokenId, tokenIdx } = this.$route.query;
      // getInfoById(uint _tokenId)
      if (tokenId) {
        const [result] = await miningContract.functions.getInfoById(tokenId);
        console.log('token', result);

        const { tokenURI, isInOrder } = result;
        // console.log(result.isInOrder)

        this.isInOrder = isInOrder;
        // const [token] = result;
        // const { auction, tokenURI } = token;

        // this.auction = auction;

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
      //   };
      //   this.tokenUrl = `https://ipfs.io/ipfs/${tokenIdx}`;
      //   const { data } = await axios({
      //     method: 'get',
      //     url: this.tokenUrl,
      //   });
      //   this.NFTDetail = data;
      // }
    },
  },
};
</script>

<style lang="postcss" scoped>
.auction-detail {
    margin-bottom: 128px;

}
</style>
