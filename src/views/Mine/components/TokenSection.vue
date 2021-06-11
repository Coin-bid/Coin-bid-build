<template>
  <b-container fluid="lg" >
    <div class="token-section">

      <div class="token-item">
        <div class="icon-wrapper">
          <img src="../img/CBD@2x.png" alt="">
        </div>
        <div class="token-info">
          <div class="count">4494</div>
          <div class="symbol">CBD</div>
        </div>
      </div>
      <div class="token-item">
        <div class="icon-wrapper">
          <img src="../img/USDT@2x.png" alt="">

        </div>
        <div class="token-info">
          <div class="count">4494</div>
          <div class="symbol">USDT</div>
        </div>
      </div>
      <div class="token-item">
          <div class="icon-wrapper">
          <img src="../img/ETH@2x.png" alt="">

        </div>
        <div class="token-info">
          <div class="count">4494</div>
          <div class="symbol">ETH</div>
        </div>
      </div>
      <div class="token-item">
          <div class="icon-wrapper">
          <img src="../img/icon-daily@2x.png" alt="">
        </div>
        <div class="token-info">
          <div class="count">4494CBD</div>
          <div class="symbol">每日收益</div>
        </div>
      </div>
      <div class="token-item">
        <div class="icon-wrapper">
          <img src="../img/icon-total@2x.png" alt="">
        </div>
        <div class="token-info">
          <div class="count">4494CBD</div>
          <div class="symbol">总产量</div>
        </div>
        <b-button class="withdraw-btn" variant="primary" size="sm" >提取</b-button>
      </div>
    </div>
  </b-container>
</template>

<style lang="scss" scoped>
.token-section {
  background: #FFFFFF;
  margin-top: 50px;
  // height: 312px;
  // background: #FFFFFF;
  // box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
  display: flex;
}

.token-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 0;
  width: 220px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & + .token-item {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    flex-grow: 1;
  }

}
.icon-wrapper {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  // background: red;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.token-info {
  .count {
    line-height: 24px;
    font-size: 24px;
  }
  .symbol {
    font-size: 16px;
    line-height: 16px;
    color: #464A53;
    margin-top: 8px;
  }
}

.withdraw-btn {
  margin-left: 24px;
}

@media (max-width: 992px) {
  .token-section {
    flex-wrap: wrap;
    justify-content: flex-start;
    // height: auto;
    // padding: 16px;

    & .token-item {
      width: 33%;
    }

    // & .icon-wrapper {
    //   width: 42px;
    //   height: 42px;
    // }

    .count {
      font-size: 20px;
    }

    .symbol {
      font-size: 14px;
    }
  }
}

@media (max-width: 540px) {
 .token-section {

    & .token-item {
      width: 50%;
    }
  }
}

</style>
