<i18n>
{
  "en": {
    "dailyOutput": "Daily output"

  },
  "zh": {
    "dailyOutput": "日产量"
  }
}
</i18n>
<template>
  <div class="work-card" @click="onClick">
    <div class="work-pic-wrapper">
      <img class="work-pic" :src="NFTDetail.image" >
    </div>
    <div class="info" v-if="type === 'owned'">
      <div class="row-1">
        <span>{{NFTDetail.name}}</span>
        <span>{{$t('dailyOutput')}}：1CBD</span>
      </div>
    </div>

     <div class="info" v-else>
        <div class="row-1">
          <span>{{NFTDetail.name}}</span>
          <span class="price">{{toBignumber(item.lastPrice).div(10 ** 6)}}USDT</span>
        </div>
        <div class="row-2">
          <span>{{$t('dailyOutput')}}：1CBD</span>
          <span>{{format(item.endAt) }}</span>
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


export default {
  props: ['item', 'type'],

  data() {
    // const { type } = this.$route.query;
    return {
      NFTDetail: {},
    }
  },
  created() {
    this.getDetail();
  },
  methods: {
    format(endAt) {
      const diff = moment(endAt * 1000).fromNow();
      return diff;
    },
    toBignumber(num) {
      return BigNumber.from(num);
    },
    async getDetail() {
      const { tokenURI, tokenId } = this.item;
      // const [ token ] = this.item;
      // console.log(auction.tokenId);
      // console.log();

      // const tokenIdx = mockList[this.index % 4];
      this.tokenUrl = tokenURI || `https://ipfs.io/ipfs/${tokenIdx}`;

      const { data } = await axios({
        method: 'get',
        url: this.tokenUrl,
      });

      // console.log(data)
      this.NFTDetail = data;
    },

    onClick() {
      let { tokenId, id } = this.item;

      if (tokenId) {
        tokenId = tokenId.toNumber();
      }

      if (id) {
        id = BigNumber.from(id).toNumber();
      }
      this.$router.push({
        path: '/mine/work/detail',
        query: {
          tokenId: tokenId || id,
          type: this.type,
          seller: this.item.seller,
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.work-card {
  width: 285px;
  // height: 275px;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
  padding: 10px 10px 1px;
  cursor: pointer;
  margin-bottom: 16px;

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
