<template>
  <div class="auction">
    <b-container fluid="lg" class="op-bar">

      <b-row align-v="center">
        <b-col span="6">
          <img class="auction-img-1" src="@/assets/img/auction-1@2x.png" alt="">
        </b-col>
        <b-col span="6" class="auction-info">
          <h3>Auction Cover</h3>
          <p>We are the first and the only crowdfunding platform enabling you to help enabling you to help finance our first and the only crowdfunding platformenabling you to help finance .</p>
          <b-button class="btn" variant="primary" size="lg">View More</b-button>
        </b-col>
      </b-row>

      <b-row align-v="center">
        <b-col span="6" class="auction-info">
           <h3>Auction of Art Works</h3>
          <p>We are the first and the only crowdfunding platform enabling you to help enabling you to help finance our first and the only crowdfunding platformenabling you to help finance .</p>
          <b-button  class="btn" variant="primary" size="lg">View More</b-button>
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
</style>
