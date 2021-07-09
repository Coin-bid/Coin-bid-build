<template>
  <div class="work-card" @click="toDetail">
    <div class="work-pic-wrapper">
      <img class="work-pic" :src="NFTDetail.image" alt="">
    </div>
    <div class="info">
      <div class="row-1">
        <span>{{name}}</span>
        <span class="price">{{swap.price.div(10 ** 6)}}USDT</span>
      </div>
      <div class="row-2">
        <span>Daily output：1CBD</span>
        <!-- <span>Ξ 0.05</span> -->
        <!-- <span>{{format(swap.endAt) }}</span> -->
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


// 铸造只传这一段
const mockList = [
  'QmTmQ9YCsRuHq52cxqpDSZ7oz3JGWrTJ4k1yB231gsADAa',
  'QmaSHQfqxNEgfHx4cedq76sfNRSraQrcuUcL3qSZJzpkZb',
  'QmaoZzgx1pKFSEruz6CVaKuTxcsk22jMMvZBcLzmEyLpvr',
  'QmVGQ1QjvxhHKXWLwMUazXK1cXuF5V6Wc35ubQo34Q2SiF',
];

export default {
  props: ['swap', 'tokenURI'],

  data() {
    return {
      NFTDetail: {},
    };
  },

  computed: {
    name() {
      // if (this.item.tokenURI) {
      return this.NFTDetail.name;
      // }
      // return mockNFT.name;
    },
    image() {
      // if (this.item.tokenURI) {
      return this.NFTDetail.image;
      // }
      // return mockNFT.image;
    },
    description() {
      // if (this.item.tokenURI) {
      return this.NFTDetail.description;
      // }
      // return mockNFT.description;
    },

    // auction() {
    //   return this.item.auction;
    // },
  },

  created() {
    this.getDetail();
  },

  methods: {
    async getDetail() {
      const { tokenURI, swap } = this;
      // const [ token ] = this.item;
      console.log(swap.tokenId);
      console.log();

      // const tokenIdx = mockList[this.index % 4];
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
    toDetail() {
      const { swap } = this;
      // if (auction.tokenId.eq(0)) {
      //   const tokenIdx = mockList[this.index % 4];
      //   this.$router.push(`/auction/detail/?tokenIdx=${tokenIdx}&price=${auction.lastPrice}&endTime=${auction.endAt}&startTime=${auction.startedAt}`);
      // } else {
      this.$router.push(`/swap/detail/?tokenId=${swap.tokenId}&price=${swap.price}&seller=${swap.seller}`);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.work-card {
  width: 285px;
  height: 275px;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
  padding: 10px 10px 0;
  cursor: pointer;

  .work-pic-wrapper {
    height: 195px;
    width: 265px;
    flex-shrink: 0;
  }
  .work-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    margin-top: 14px;
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
      color: #000000;
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 12px;

      & .price {
        color: #FF6600;
      }
    }

    .row-2 {
      color: #999999;
      font-size: 14px;
      line-height: 14px;
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

        & .price {
          color: #fff;
        }
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
