<template>
  <div class="work-card" @click="toDetail">
    <div class="work-pic-wrapper">
      <img class="work-pic" :src="image" alt="">
    </div>
    <div class="info">
      <div class="row-1">
        <span>{{name}}</span>
        <span class="price">{{toBignumber(item.lastPrice).div(10 ** 6)}}USDT</span>
      </div>
      <div class="row-2">
        <span>Daily output：1CBD</span>
        <!-- <span>Ξ 0.05</span> -->
        <span>{{format(item.endAt) }}</span>
        <!-- endAt -->
      </div>
      <!-- <div class="row-3">
         <span>
           <img src="@/assets/img/icon-lock@2x.png" alt="">
         </span>
        <span>an hours left</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import { BigNumber } from 'ethers';


// 铸造只传这一段
const mockList = [
  'QmTmQ9YCsRuHq52cxqpDSZ7oz3JGWrTJ4k1yB231gsADAa',
  'QmaSHQfqxNEgfHx4cedq76sfNRSraQrcuUcL3qSZJzpkZb',
  'QmaoZzgx1pKFSEruz6CVaKuTxcsk22jMMvZBcLzmEyLpvr',
  'QmVGQ1QjvxhHKXWLwMUazXK1cXuF5V6Wc35ubQo34Q2SiF',
];

export default {
  props: ['item', 'index'],

  data() {
    return {
      NFTDetail: {},
    };
  },

  computed: {
    name() {
      return this.NFTDetail.name;
    },
    image() {
      return this.NFTDetail.image;
    },
    description() {
      return this.NFTDetail.description;
    },

    // auction() {
    //   return this.item.auction;
    // },
  },

  created() {
    this.getDetail();
  },

  methods: {

    toBignumber(num) {
      return BigNumber.from(num);
    },
    async getDetail() {
      const { tokenURI } = this.item;
      const tokenIdx = mockList[this.index % 4];
      this.tokenUrl = tokenURI || `https://ipfs.io/ipfs/${tokenIdx}`;

      const { data } = await axios({
        method: 'get',
        url: this.tokenUrl,
      });

      // console.log(data)
      this.NFTDetail = data;
    },
    format(endAt) {
      const diff = moment(endAt * 1000).fromNow();
      return diff;
    },
    toDetail(idx) {
      const { tokenURI, auction } = this.item;
      if (auction.tokenId.eq(0)) {
        const tokenIdx = mockList[this.index % 4];
        this.$router.push(`/auction/detail/?tokenIdx=${tokenIdx}&price=${auction.lastPrice}&endTime=${auction.endAt}&startTime=${auction.startedAt}`);
      } else {
        this.$router.push(`/auction/detail/?tokenId=${auction.tokenId}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.work-card {
  width: 380px;
  height: 358px;
  background: #FFFFFF;
  box-shadow: 0px 3px 30px 0px rgba(205, 204, 211, 0.5);
  padding: 10px 10px 0;

  .work-pic {
    width: 100%;
    // width: 360px;
    height: 260px;
  }

  .info {
    // padding: 25px 15px;
    margin-top: 16px;
    .row-1,
    .row-2,
    .row-3 {
      display: flex;
      justify-content:space-between;
      font-size:16px;
    }
    img {
      width: 14px;
    }

    .row-1 {
      color: #999999;
      font-size: 16px;
      margin-bottom: 12px;
      color: #00D750;
    }

    .row-2 {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  &:hover {
    background: #00D750;

    .info  {
      .row-1,
      .row-2,
      .row-3 {
        color: #fff;
      }
    }

  }
}

@media (max-width: 992px) {

}

@media (max-width: 576px) {
  .work-card {
    width: 100%;

    .work-pic-wrapper {
      width: 100%;
    }
    .work-pic {
      width: 100%;

    }
  }
}
</style>
