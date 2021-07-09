<i18n>
{
  "en": {
    "price": "Price",
    "output": "Daily output of mining",
    "period": "Period of validity",
    "ownedQuantity": "Owned quantity",
    "introduce": "Introduce",
    "introduceDesc": "Magic canvas, with which you can create works",

    "quantity": "Quantity",

    "buy": "Buy canvas",
    "mustInteger": "Must be integer",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "createWorks": "Create works"
    },
    "zh": {
      "price": "价格",
      "output": "挖矿日产量",
      "period": "有效期",
      "ownedQuantity": "拥有数量",
      "introduce": "介绍",
      "introduceDesc": "神奇的画布，可以创作作品",
      "quantity": "数量",
      "buy": "购买画布",
      "mustInteger": "必须是整数",
      "cancel": "取消",
      "confirm": "确认",
      "createWorks": "创建作品"
    }
}
</i18n>

<template>
    <b-container fluid="lg" >
      <div class="introduce">
        <div class="pic-wrapper">
          <img src="~../img/pic_canvas@2x.png" alt="">
        </div>
        <div class="info-wrapper">
          <!-- <h2 class="title">{{NFTDetail.name}}</h2> -->
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-owner@2x.png" alt="">
              <span>{{$t('price')}}</span>
              </div>
            <div class="info-content">{{price / 10 ** 18}}CBD</div>
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
              <span>{{$t('period')}}</span></div>
            <div class="info-content red">1000 Days</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-miner@2x.png" alt="">
              <span>{{$t('ownedQuantity')}}</span></div>
            <div class="info-content red">{{canvasAmount}}</div>
          </div>
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-intro@2x.png" alt="">
              <span>{{$t('introduce')}}</span></div>
            <div class="info-content">{{$t('introduceDesc')}}</div>
          </div>

          <div class="buy-btn-wrapper">
            <b-button id="popover-reactive-1" class="buy-btn" variant="primary" size="lg">{{$t('buy')}}</b-button>
            <b-popover
              target="popover-reactive-1"
              triggers="click"
              :show.sync="popoverShow"
              placement="auto"
              container="my-container"
              ref="popover"
              @show="onShow"
              @shown="onShown"
              @hidden="onHidden"
            >
              <template #title>
                <b-button @click="onClose" class="close" aria-label="Close">
                  <span class="d-inline-block" aria-hidden="true">&times;</span>
                </b-button>
                {{$t('quantity')}}
              </template>

              <div>
                <b-form-group
                  :label="$t('quantity')"
                  label-for="popover-input-1"
                  label-cols="4"
                  :state="amountstate"
                  :invalid-feedback="$t('mustInteger')"
                >
                  <b-form-input
                    ref="amount"
                    id="popover-input-1"
                    v-model="amount"
                    :state="amountstate"
                    size="sm"
                  ></b-form-input>
                </b-form-group>

                <div class="button-wrapper">
                  <b-button @click="onClose" class="cancel-btn" size="sm" variant="danger">{{$t('cancel')}}</b-button>
                  <b-button @click="onOk" :disabled="submitting" class="ok-btn" size="sm" variant="primary">{{$t('confirm')}}</b-button>
                </div>
              </div>
            </b-popover>
            <b-button class="create-btn" variant="primary" size="lg" @click="onCreate">{{$t('createWorks')}}</b-button>
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import config from "@/config";
import { BigNumber } from 'ethers'
import { canvasAuctionContract, canvasAuctionInterface, coinBidContract, coinBidInterface, provider } from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';
// import moment from 'moment';

// const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();


// const tx = {
//   to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
//   value: utils.parseEther("1.0")
// }
// const signed = signer.signTransaction(tx);
// console.log(canvasAuctionContract.functions)

export default {

  data() {
    return {
      amount: '',
      amountstate: null,
      popoverShow: false,
      NFTDetail: {},
      price: 0,
      canvasAmount: 0,

      submitting: false,
    };
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },

  created() {
    this.getPrice();
    this.getAmount();
    // this.getDetail();
  },

  methods: {
    async getPrice() {
      const [price] = await canvasAuctionContract.functions.canvasPrice();
      this.price = price;
    },

    async getAmount() {
      console.log('amount', this.user.address);
      const [canvasAmount] = await canvasAuctionContract.functions.getMyAmount(this.user.address);

      console.log('amount', canvasAmount);
      this.canvasAmount = canvasAmount;
    },

    onCreate() {
      this.$router.push('/collection/create')
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

    onClose() {
      this.popoverShow = false;
    },
    async onOk() {

      if (!Number(this.amount)) {
        this.amountstate = false;
        // __g_root__.$bvToast.toast('请输入整数', {
        //   title: 'Notice',
        //   // toaster: 'b-toaster-top-center',
        //   autoHideDelay: 5000,
        // });
        return;
      }

      this.submitting = true;

      const allowance = await coinBidContract.allowance(
        ethereum.selectedAddress,
        config.canvasAuction,
      );

      if (allowance.lt(this.price)) {
        const approveTxHash = await sendTransaction({
          to: config.coinBid,
          data: coinBidInterface.encodeFunctionData('approve', [
            config.canvasAuction,
            BigNumber.from('9'.repeat(32)).toHexString(),
          ])
        })
        console.log(approveTxHash)
        await provider.waitForTransaction(approveTxHash)
      }
      // const approveHash = await coinBidContract.functions.approve(
      //   config.canvasAuction,
      //   BigNumber.from('9'.repeat(32)).toHexString(),
      // );

      const buyTxHash = await sendTransaction({
        to: config.canvasAuction,
        data: canvasAuctionInterface.encodeFunctionData('buy', [
          this.amount,
        ])
      })

      await provider.waitForTransaction(buyTxHash)

      this.submitting = false;

      // const tx = await canvasAuctionContract.functions.buy(this.amount);
      console.log('hhh');
      // if (this.amount && this.input2) {
      //   this.onClose()
      // }
    },

    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      // this.focusRef(this.$refs.amount)
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      // this.focusRef(this.$refs.button)
    },
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
  height: 360px;
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

.buy-btn-wrapper {
  margin-top: 24px;
  & .buy-btn {
    // width: 240px;
  }
  .create-btn {
    margin-left: 24px;
  }
}
.cancel-btn {
  width: 64px;

}
.ok-btn {
  margin-left: 12px;
  width: 78px;
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
