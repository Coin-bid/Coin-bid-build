<template>
  <div class="work-card" @click="toDetail">
    <div class="work-pic-wrapper">
      <img class="work-pic" :src="image" alt="">
    </div>
    <div class="info">
      <div class="row-1">
        <span>{{name}}</span>
        <span class="price">$ {{auction.lastPrice.div(10 ** 6)}}</span>
      </div>
      <div class="row-2">
        <span>日产量：1CBD</span>
        <!-- <span>Ξ 0.05</span> -->
        <span>{{auction.endAt / 60}} min</span>
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

const mockNFT = {
  name: 'Snooprematic',
  description: 'Snooprematic is made up of basic geometric forms such as squares, circles, and rectangles (but no triangles, huh) presented in an array of colors. This explosion of geometric vocabulary, though abstract, retains its expressiveness through the subtle Snoo form that emerges through the shapes and color. By allowing the alien form to retain its shape among the shapes, the artist hints at universal truths at the heart of all alien existence. Also, pretty.',
  image: 'https://ipfs.io/ipfs/QmXY3SAJrNBtJTQ4UyXNREcNjZm7sCyhZHzU1Z6shH2Zrt',
};

export default {
  props: ['item'],

  data() {
    return {
      NFTDetail: {},
    };
  },

  computed: {
    name() {
      if (this.item.tokenURI) {
        return this.NFTDetail.name;
      }
      return mockNFT.name;
    },
    image() {
      if (this.item.tokenURI) {
        return this.NFTDetail.image;
      }
      return mockNFT.image;
    },
    description() {
      if (this.item.tokenURI) {
        return this.NFTDetail.description;
      }
      return mockNFT.description;
    },

    auction() {
      return this.item.auction;
    },
  },

  created() {
    // const { tokenURI, auction } = this.item;
    // console.log(tokenURI, auction);
    this.getDetail();
  },

  methods: {
    async getDetail() {
      const { tokenURI, auction } = this.item;
      if (tokenURI) {
        const { data } = await axios({
          method: 'get',
          url: 'https://ipfs.io/ipfs/QmVGQ1QjvxhHKXWLwMUazXK1cXuF5V6Wc35ubQo34Q2SiF',
        });
        this.NFTDetail = data;
        console.log(data);
      }
    },
    toDetail() {
      this.$router.push(`/auction/detail/${this.id}`);
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
