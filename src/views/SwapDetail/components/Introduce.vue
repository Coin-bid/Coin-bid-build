<i18n>
{
  "en": {
    "owner": "Owner",
    "output": "Daily output of mining",
    "period": "Period of validity",
    "mined": "Mined",
    "ownedQuantity": "Owned quantity",
    "introduce": "Introduce",
    "buy": "Buy",

    "endAuction": "End auction",
    "swap": "Swap",
    "updatePrice": "Update price",
    "cancelSwap": "Cancel swap",

    "price": "Price",
    "pleaseInput": "Please input price",
    "cancel": "Cancel",
    "confirm": "Confirm"
  },
  "zh": {
    "owner": "所有者",
    "output": "每日挖矿产出",
    "period": "有效期",
    "mined": "已开采",
    "ownedQuantity": "拥有数量",
    "introduce": "介绍",
    "buy": "购买",

    "endAuction": "结束拍卖",
    "swap": "转让",
    "updatePrice": "更新价格",
    "cancelSwap": "取消转让",

    "price": "价格",
    "pleaseInput": "请输入价格",
    "cancel": "取消",
    "confirm": "确认"
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
            <div class="info-content">{{seller | trimAddress}}</div>
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
            <div class="info-content red">{{Math.floor(miningInfo.remainingAmout / 10 ** 18)}}/1000CBD</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-miner@2x.png" alt="">
              <span>{{$t('price')}}</span></div>
            <div class="info-content red">{{Math.floor(price / 10 ** 6) || 0}}USDT</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-intro@2x.png" alt="">
              <span>{{$t('introduce')}}</span></div>
            <div class="info-content">{{NFTDetail.description}}</div>
          </div>

          <div class="button-group">
            <b-button class="buy-btn" variant="primary" size="lg" @click="onBuy">{{$t('buy')}}</b-button>
            <!-- <b-button class="buy-btn" variant="primary" size="lg" @click="onCancel">取消订单</b-button>
            <b-button class="buy-btn" variant="primary" size="lg" @click="onUpdate">更新价格</b-button>
            <b-button class="buy-btn" variant="primary" size="lg" @click="onDelete">删除订单</b-button> -->
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';
import config from '@/config';
//   NFTAuctionContract, NFTAuctionInterface, USDTContract, USDTInterface, provider,
import { BigNumber } from 'ethers';
import {
  USDTContract, USDTInterface, NFTSwapInterface, provider,
} from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

export default {
  props: ['NFTDetail', 'price', 'seller', 'miningInfo'],
  data() {
    return {
      // price: 200,
      // NFTDetail: {},
    };
  },
  created() {
    // this.getDetail();
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },

  methods: {
    async onBuy() {
      const { tokenId } = this.$route.query;
      const realPrice = this.price;

      if (!this.user.address) {
        __g_root__.$bvToast.toast('Please connect metamask', {
          title: 'Tips',
          variant: 'danger',
          autoHideDelay: 5000,
        });
        return false;
      }

      console.log(this.user.address);
      console.log(this.seller);
      if (this.user.address.toLowerCase() === this.seller.toLowerCase()) {
        __g_root__.$bvToast.toast('You\'re already the owner', {
          title: 'Tips',
          variant: 'danger',
          autoHideDelay: 5000,
        });
        return false;
      }

      const usdtBalance = await USDTContract.balanceOf(this.user.address);

      if (usdtBalance.lt(this.price)) {
        __g_root__.$bvToast.toast('You balance is not enough', {
          title: 'Tips',
          variant: 'danger',
          autoHideDelay: 5000,
        });
        return false;
      }

      this.submitting = true;

      try {
        const allowance = await USDTContract.allowance(
          ethereum.selectedAddress,
          config.NFTSwap,
        );

        if (allowance.lt(realPrice)) {
          const approveTxHash = await sendTransaction({
            to: config.USDTContract,
            data: USDTInterface.encodeFunctionData('approve', [
              config.NFTSwap,
              BigNumber.from('9'.repeat(32)).toHexString(),
            ]),
          });

          const approveTx = await provider.waitForTransaction(approveTxHash);

          if (approveTx.status !== 1) {
            __g_root__.$bvToast.toast('Approve fail，please retry', {
              title: 'Tips',
              variant: 'danger',
              autoHideDelay: 5000,
            });
            this.submitting = false;
            return;
          }
          console.log(approveTx);
        }

        const buyTxHash = await sendTransaction({
          to: config.NFTSwap,
          gas: 960000,
          data: NFTSwapInterface.encodeFunctionData('buy', [
            tokenId,
          ]),
        });

        const buyTx = await provider.waitForTransaction(buyTxHash);

        if (buyTx.status === 1) {
          __g_root__.$bvToast.toast('Buy success', {
            title: 'Tips',
            variant: 'success',
            autoHideDelay: 5000,
          });
        } else {
          __g_root__.$bvToast.toast('Buy fail, please retry', {
            title: 'Tips',
            variant: 'danger',
            autoHideDelay: 5000,
          });
        }
      } catch (error) {
        console.error(error);
      }
      this.submitting = false;
    },
    onCancel() {

    },
    onUpdate() {

    },
    onDelete() {

    },
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
  margin-bottom: 30px;
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

.button-group {
  margin-top: 24px;
  .buy-btn {
    // margin-right: 12px;
    width: 240px;
  }
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
