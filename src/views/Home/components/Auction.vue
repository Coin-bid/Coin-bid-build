<i18n>
{
  "en": {
    "covers": "Covers In Auction",
    "coversContent": "Artists obtain the right to create NFT through bidding, thereby obtaining the opportunity to display the art works and the right to hold auction proceeds.",
    "buyCovers": "Buy Canvas",
    "creations": "Creations In Auction",
    "creationsContent": "Community collectors obtain NFTs through bidding, enjoy the income from NFT mining, and can also transfer their NFTs at any time.",
    "buyCreations": "Buy Creations"
  },
  "zh": {
    "covers": "拍卖画布",
    "coversContent": "艺术家通过竞拍获得创作NFT的权利，从而获得展示艺术品的机会和持有拍卖所得的权利。",
    "buyCovers": "购买画布",
    "creations": "拍卖作品",
    "creationsContent": "社区收藏者通过竞价获得非金融资产，享受非金融资产开采的收益，也可以随时转让其非金融资产。",
    "buyCreations": "购买作品"
  }
}
</i18n>

<template>
  <div class="auction">
    <b-container fluid="lg" class="op-bar">

      <b-row align-v="center">
        <b-col span="6">
          <img class="auction-img-1" src="@/assets/img/auction-1@2x.png" alt="">
        </b-col>
        <b-col span="6" class="auction-info">
          <h3>{{$t('covers')}}</h3>
          <p>{{$t('coversContent')}}</p>
          <b-button
            class="btn" variant="primary" size="lg" @click="$router.push('/mine')">{{$t('buyCovers')}}</b-button>
        </b-col>
      </b-row>

      <b-row align-v="center">
        <b-col span="6" class="auction-info">
           <h3>{{$t('creations')}}</h3>
          <p>{{$t('creationsContent')}}</p>
          <b-button  class="btn" variant="primary" size="lg" @click="$router.push('/auction/works')">{{$t('buyCreations')}}</b-button>
        </b-col>
        <b-col span="6">
          <img class="auction-img-1" src="@/assets/img/auction-2@2x.png" alt="">
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.auction {
  background: url(~@/assets/img/auction-left@2x.png) -300px 0 / 522px auto no-repeat;
  margin-bottom: 64px;
}

.auction-img-1 {
  width: 650px;
}

.auction-img-2 {
  width: 647px;
}

.auction-info {
  h3 {
    color: #000000;
    font-size:30px;
    margin: 0;
    font-weight: bold;
    margin-bottom: 32px;
  }

  p {
    color: #333333;
    font-size: 16px;
    margin: 0;
  }

  .btn {
    margin-top: 50px;
  }
}


@media (max-width: 992px) {
  .auction-img-1 {
    width: 100%;
  }

  .auction-img-2 {
    width: 100%;
  }
}

</style>
