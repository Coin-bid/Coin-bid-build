<i18n>
{
  "en": {
    "owner": "Owner",
    "price": "Price",
    "output": "Daily output of mining",
    "period": "Period of validity",
    "mined": "Mined",
    "ownedQuantity": "Owned quantity",
    "introduce": "Introduce"
    },
    "zh": {
      "owner": "拥有者",
      "price": "价格",
      "output": "挖矿日产量",
      "period": "有效期",
      "mined": "已产出",
      "ownedQuantity": "拥有数量",
      "introduce": "作品介绍"
    }
}
</i18n>
<template>
    <b-container fluid="lg" >
      <div class="introduce">
        <div class="pic-wrapper">
          <img :src="NFTDetail.image" alt="">
        </div>
        <div class="info-wrapper">
          <h2 class="title">{{NFTDetail.name || '-'}}</h2>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-owner@2x.png" alt="">
              <span>{{$t('owner')}}</span>
              </div>
            <div class="info-content">{{auction.creator ||'Random_HEX'}}</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-calendar@2x.png" alt="">
              <span>{{$t('output')}}</span></div>
            <div class="info-content green">1CBD</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-miner@2x.png" alt="">
              <span>{{$t('mined')}}</span></div>
            <div class="info-content red">0/1000CBD</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-intro@2x.png" alt="">
              <span>{{$t('introduce')}}</span></div>
            <div class="info-content">{{NFTDetail.description}}</div>
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';


export default {
  props: ['NFTDetail', 'auction'],
  data() {
    return {
      // NFTDetail: {},
    }
  },
  created() {
    // this.getDetail();
  },

  methods: {
    // async getDetail() {
    //   const { id } = this.$route.params;

    //   // console.log(id)
    //   this.tokenUrl = `https://ipfs.io/ipfs/${id}`;

    //   const { data } = await axios({
    //     method: 'get',
    //     url: this.tokenUrl,
    //   });
    //   this.NFTDetail = data;
    // },
    // toDetail() {
    //   this.$router.push(`/auction/detail/${this.tokenId}`);
    // },
  },
};
</script>

<style lang="scss" scoped>

.introduce {
  display: flex;
  margin-top: 30px;
}

.pic-wrapper {
  width: 500px;
  height: 400px;
  margin-right: 30px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info-wrapper {
  flex-grow: 1;
  .title {
    font-size: 30px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 20px;
  }

  .info-row {
    padding: 14px 0;
    display: flex;
    &:not(:last-child) {
      border-bottom: 1px solid #E5E5E5;
    }

    .info-label {
      width: 240px;
      flex-shrink: 0;
      // display: flex;
      // align-items: center;
    }

    img {
      width: 16px;
      margin-right: 15px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
}

.green {
  color: #00D750;
}

.red {
  color: #E2534B;
}

@media (max-width: 992px) {
  .pic-wrapper {
    width: 100%;
    margin-bottom: 24px;
  }
  .introduce {
    flex-direction: column;
  }
}

@media (max-width: 540px) {

  // .sort-btn {
  //   margin-top: 24px;
  // }
}

</style>
