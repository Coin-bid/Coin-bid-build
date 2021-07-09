<template>
  <div class="auction-detail">
    <Introduce
      :NFTDetail="NFTDetail"
      :price="price"
      :seller="seller"
      :mining-info="miningInfo"
    />
    <!-- <Price :auction="auction"/>
    <Change/> -->
  </div>
</template>

<script>
import axios from 'axios';
import Introduce from './components/Introduce.vue';
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
      price: '',
      seller: '',
      auction: {
        lastPrice: 0,
        endAt: 0,
        startedAt: 0,
      },
      miningInfo: {
        remainingAmout: 0,
      },
    }
  },

  created() {
    this.getDetail();
  },

  methods: {
    async getDetail() {
      const { tokenId, price, seller } = this.$route.query;

      this.price = price;
      this.seller = seller;
      if (tokenId) {
        const result = await miningContract.functions.getInfoById(tokenId);
        const [token] = result;
        const { miningInfo, tokenURI } = token;
        this.miningInfo = miningInfo;

        console.log(result)
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
