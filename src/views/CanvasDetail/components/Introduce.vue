<template>
    <b-container fluid="lg" >
      <div class="introduce">
        <div class="pic-wrapper">
          <img src="~../img/pic_canvas@2x.png" alt="">
        </div>
        <div class="info-wrapper">
          <h2 class="title">{{NFTDetail.name}}</h2>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-owner@2x.png" alt="">
              <span>Owner</span>
              </div>
            <div class="info-content">Random_HEX</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-calendar@2x.png" alt="">
              <span>Daily output of mining</span></div>
            <div class="info-content green">1CBD</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-miner@2x.png" alt="">
              <span>Mined</span></div>
            <div class="info-content red">0/1000CBD</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-intro@2x.png" alt="">
              <span>introduction of the work</span></div>
            <div class="info-content">画布</div>
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
import axios from 'axios';
// import moment from 'moment';


export default {

  data() {
    return {
      NFTDetail: {},
    }
  },
  created() {
    // this.getDetail();
  },

  methods: {

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
