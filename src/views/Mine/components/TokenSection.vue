<template>
  <b-container fluid="lg" >
    <div class="token-section">

      <div class="token-item">
        <div class="icon-wrapper">
          <img src="../img/CBD@2x.png" alt="">
        </div>
        <div class="token-info">
          <div class="count">{{cbdBalance ? (cbdBalance /1e18).toFixed(2) : 0}}</div>
          <div class="symbol">CBD</div>
        </div>
      </div>
      <div class="token-item">
        <div class="icon-wrapper">
          <img src="../img/USDT@2x.png" alt="">

        </div>
        <div class="token-info">
          <div class="count">{{usdtBalance ? (usdtBalance / 1e6).toFixed(2) : 0}}</div>
          <div class="symbol">USDT</div>
        </div>
      </div>
      <div class="token-item">
          <div class="icon-wrapper">
          <img src="../img/ETH@2x.png" alt="">

        </div>
        <div class="token-info">
          <div class="count">{{ethBalance ? (ethBalance / 1e18).toFixed(2) : 0}}</div>
          <div class="symbol">ETH</div>
        </div>
      </div>
      <div class="token-item">
          <div class="icon-wrapper">
          <img src="../img/icon-daily@2x.png" alt="">
        </div>
        <div class="token-info">
          <div class="count">{{dailyEarning ? (dailyEarning / 1e18).toFixed(2) : 0}}CBD</div>
          <div class="symbol">Daily earned</div>
        </div>
      </div>
      <div class="token-item">
        <div class="icon-wrapper">
          <img src="../img/icon-total@2x.png" alt="">
        </div>
        <div class="token-info">
          <div class="count">{{earnedBalance ? (earnedBalance / 1e18).toFixed(2) : 0}}CBD</div>
          <div class="symbol">Total earned</div>
        </div>
        <b-button class="withdraw-btn" :disabled="claimLoading" variant="primary" size="sm" @click="onClaim">Withdraw</b-button>
      </div>
    </div>
  </b-container>
</template>

<script>
import config from '@/config';
import {
  miningInterface, provider,
} from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

export default {
  props: ['address', 'ethBalance', 'usdtBalance', 'cbdBalance', 'earnedBalance', 'dailyEarning'],
  data() {
    return {
      claimLoading: false,
    }
  },
  methods: {

    async onClaim() {

      this.claimLoading = true;


      console.log(config.mining)
      console.log(miningInterface)
      const txHash = await sendTransaction({
        to: config.mining,
        // gas: 960000,
        data: miningInterface.encodeFunctionData('claim()'),
      });
      const claimTx = await provider.waitForTransaction(txHash);

      this.claimLoading = false;

      if (claimTx.status === 1) {
        __g_root__.$bvToast.toast('Withdraw success', {
          title: 'Tips',
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Withdraw failed', {
          title: 'Tips',
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
    },
  }
}
</script>
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
  flex-shrink: 0;
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
