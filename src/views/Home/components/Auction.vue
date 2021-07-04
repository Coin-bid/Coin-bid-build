<template>
  <div class="auction">
    <b-container fluid="lg" class="op-bar">

      <b-row align-v="center">
        <b-col span="6">
          <img class="auction-img-1" src="@/assets/img/auction-1@2x.png" alt="">
        </b-col>
        <b-col span="6" class="auction-info">
          <h3>Covers In Auction</h3>
          <p>Artists obtain the right to create NFT through bidding, thereby obtaining the opportunity to display the art works and the right to hold auction proceeds.</p>
          <b-button
            class="btn" variant="primary" size="lg" @click="$router.push('/mine')">Buy Canvas</b-button>
        </b-col>
      </b-row>

      <b-row align-v="center">
        <b-col span="6" class="auction-info">
           <h3>Creations In Auction</h3>
          <p>Community collectors obtain NFTs through bidding, enjoy the income from NFT mining, and can also transfer their NFTs at any time.</p>
          <b-button  class="btn" variant="primary" size="lg" @click="$router.push('/auction/works')">View More</b-button>
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
