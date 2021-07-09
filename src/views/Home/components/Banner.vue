<i18n>
{
  "en": {
    "discover": "Discover, collect,and sell extraordinary NFTs",
    "content": "Coin Bid The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.",
    "explore": "Explore"
  },
  "zh": {
    "discover": "发现、收集和销售非凡的 NFT",
    "content": "Coin Bid 世界上第一个也是最大的加密收藏品和不可替代代币 (NFT) 的数字市场。购买、出售和发现独家数字资产。",
    "explore": "探索"
  }
}
</i18n>

<template>
  <div class="banner">
    <div class="bg">
      <img src="~@/assets/img/banner@2x.png" alt="">
    </div>
    <b-container fluid="lg">
      <div class="left-content">
        <h3 >
         {{ $t('discover') }}
        </h3>
        <div class="content">{{$t('content')}}</div>
        <b-button variant="primary" size="lg" @click="$router.push('/auction')">{{$t('explore')}}</b-button>
      </div>
    </b-container>
  </div>

</template>

<style lang="scss" scoped>

.banner {
  height: 800px;
  padding-top: 180px;
  box-sizing: border-box;
  position: relative;
}

.left-content {
  max-width: 520px;
}

h3 {
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 35px;
}

.content {
  font-size: 18px;
  color: #333;
  margin-bottom: 64px;
}

.bg {
  z-index: -1;
  position: absolute;
  // top: -300px;
  top: -430px;
  right: 0;
  height: 1158px;
  width: 1326px;
  overflow: hidden;
  & img {
    height: 1158px;
    width: 1326px;
    position: absolute;
    right: -200px
    // 120% 0 / auto 1158px no-repeat
  }
  // background: url() ;
}

@media (max-width: 992px) {
  .bg {
    & img {
      right: -800px
    }
  }
}

@media (max-width: 540px) {
  .bg {
    & img {
      right: -1100px
    }
  }
}
</style>
