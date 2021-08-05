<i18n>
{
  "en": {
    "owner": "Owner",
    "output": "Daily output of mining",
    "period": "Period of validity",
    "mined": "Mined",
    "ownedQuantity": "Owned quantity",
    "introduce": "Introduce",

    "endAuction": "End auction",
    "swap": "Swap",
    "updatePrice": "Update price",
    "cancelSwap": "Cancel swap",

    "price": "Price",
    "pleaseInput": "Please input price",
    "cancel": "Cancel",
    "confirm": "Confirm",

    "endbidSuccess": "End bid success, you owned the works",
    "endbidFail": "End bid fail, please retry",
    "createSuccess": "Create success",
    "createFail": "Create fail, please retry",
    "cancelSuccess": "Cancel success",
    "cancelFail": "Cancel fail, please retry",
    "updateSuccess": "Update success",
    "updateFail": "Update fail, please retry"

  },
  "zh": {
    "owner": "所有者",
    "output": "每日挖矿产出",
    "period": "有效期",
    "mined": "已开采",
    "ownedQuantity": "拥有数量",
    "introduce": "介绍",
    "endAuction": "结束拍卖",
    "swap": "转让",
    "updatePrice": "更新价格",
    "cancelSwap": "取消转让",

    "price": "价格",
    "pleaseInput": "请输入价格",
    "cancel": "取消",
    "confirm": "确认",

    "endbidSuccess": "竞价成功，你将获得作品",
    "endbidFail": "结束竞价失败，请重试",
    "createSuccess": "创建成功",
    "createFail": "创建失败，请重试",
    "cancelSuccess": "取消成功",
    "cancelFail": "取消失败，请重试",
    "updateSuccess": "取消成功",
    "updateFail": "取消失败，请重试"
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
            <div class="info-content" v-if="type === 'created' ||  type === 'owned'">
              {{user.address}}
            </div>
            <div class="info-content" v-if="type === 'auction'">
              {{seller}}
            </div>

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
           <!-- <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-miner@2x.png" alt="">
              <span>Price</span></div>
            <div class="info-content red">200 $</div>
          </div> -->
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-intro@2x.png" alt="">
              <span>{{$t('introduce')}}</span></div>
            <div class="info-content">{{NFTDetail.description}}</div>
          </div>
          <div class="button-group" v-if="type === 'auction'">
              <b-button
              class="buy-btn"
              size="lg"
              variant="primary"
              @click="onEndAuction"
              :disabled="endLoading"
            >{{$t('endAuction')}}</b-button>
          </div>
          <div class="button-group" v-if="type === 'owned'">
            <b-button
              id="popover-reactive-1"
              class="buy-btn"
              variant="primary"
              size="lg"
              :disabled="createLoading"
              v-if="!isInOrder"
            >{{$t('swap')}}</b-button>
            <b-button
              id="popover-reactive-2"
              class="buy-btn"
              variant="primary" size="lg"
              :disabled="updateLoading"
              v-if="isInOrder"
            >{{$t('updatePrice')}}</b-button>
            <b-button
              class="buy-btn"
              size="lg"
              variant="danger"
              @click="onCancel"
              :disabled="cancelLoading"
              v-if="isInOrder"
            >{{$t('cancelSwap')}}</b-button>

            <b-popover
              target="popover-reactive-1"
              triggers="click"
              :show.sync="popoverShowSwap"
              placement="auto"
              container="my-container"
              ref="popover"
            >
              <template #title>
                <b-button @click="onSwapClose" class="close" aria-label="Close">
                  <span class="d-inline-block" aria-hidden="true">&times;</span>
                </b-button>
                {{$t('price')}}
              </template>

              <div>
                <b-form-group
                  :label="$t('price')"
                  label-for="popover-input-1"
                  label-cols="4"
                  :state="pricestateswap"
                  :invalid-feedback="$t('pleaseInput')"
                >
                  <b-form-input
                    ref="priceswap"
                    id="popover-input-1"
                    v-model="priceswap"
                    :state="pricestateswap"
                    size="sm"
                  ></b-form-input>
                </b-form-group>

                <div class="popover-button-wrapper">
                  <b-button @click="onSwapClose" class="cancel-btn" size="sm" variant="danger">{{$t('cancel')}}</b-button>
                  <b-button @click="onCreate" :disabled="createLoading" class="ok-btn" size="sm" variant="primary">{{$t('confirm')}}</b-button>
                </div>
              </div>
            </b-popover>

            <b-popover
              target="popover-reactive-2"
              triggers="click"
              :show.sync="popoverShow"
              placement="auto"
              container="my-container"
              ref="popover"
            >
              <template #title>
                <b-button @click="onClose" class="close" aria-label="Close">
                  <span class="d-inline-block" aria-hidden="true">&times;</span>
                </b-button>
                {{$t('price')}}
              </template>

              <div>
                <b-form-group
                  label="Price"
                  label-for="popover-input-1"
                  label-cols="4"
                  :state="pricestate"
                  :invalid-feedback="$t('inputPrice')"
                >
                  <b-form-input
                    ref="price"
                    id="popover-input-1"
                    v-model="price"
                    :state="pricestate"
                    size="sm"
                  ></b-form-input>
                </b-form-group>

                <div class="popover-button-wrapper">
                  <b-button @click="onClose" class="cancel-btn" size="sm" variant="danger">{{$t('cancel')}}</b-button>
                  <b-button @click="onUpdate" :disabled="updateLoading" class="ok-btn" size="sm" variant="primary">{{$t('confirm')}}</b-button>
                </div>
              </div>
            </b-popover>
            <!-- <b-button class="buy-btn" variant="danger" size="lg" @click="onDelete">删除订单</b-button> -->
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
import config from "@/config";
import { mapState } from 'vuex';
import {
  NFTAuctionContract, NFTAuctionInterface, USDTContract, USDTInterface, provider,
} from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

export default {
  props: ['NFTDetail', 'isInOrder'],

  data() {
    const { type, seller } = this.$route.query;

    return {
      type,

      seller,
      popoverShowSwap: false,
      popoverShow: false,

      priceswap: 0,
      pricestateswap: null,

      price: 0,
      pricestate: null,
      endLoading: false,
      createLoading: false,
      cancelLoading: false,
      updateLoading: false,
      // NFTDetail: {},
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    })
  },
  created() {
    // this.getDetail();
  },

  methods: {
  // "endbidSuccess": "竞价成功，你将获得作品",
  //   "endbidFail": "结束竞价失败，请重试",
  //   "createSuccess": "创建成功",
  //   "createFail": "创建失败，请重试",
  //   "cancelSuccess": "取消成功",
  //   "cancelFail": "取消失败，请重试",
  //   "updateSuccess": "取消成功",
  //   "updateFail": "取消失败，请重试"
    async onEndAuction() {
      const { tokenId } = this.$route.query;

      this.endLoading = true;
      try {
         const auctionEndTxHash = await sendTransaction({
          to: config.NFTAuction,
          gas: 960000,
          data: NFTAuctionInterface.encodeFunctionData('auctionEnd', [
            tokenId,
          ]),
        });
        const auctionEndTx = await provider.waitForTransaction(auctionEndTxHash);

         if (auctionEndTx.status === 1) {
          __g_root__.$bvToast.toast(this.$('endbidSuccess'), {
            title: this.$t('tip'),
            variant: 'success',
            autoHideDelay: 5000,
          });
        } else {
          __g_root__.$bvToast.toast(this.$('endbidFail'), {
            title: this.$t('tip'),
            variant: 'danger',
            autoHideDelay: 5000,
          });
        }
      } catch (error) {
        console.error(error)
      }
      this.endLoading = false;



    },

    onClose() {
      this.popoverShow = false;
    },

    onSwapClose() {
      this.popoverShowSwap = false;
    },

    async onCreate() {
      const { tokenIdx, tokenId } = this.$route.query;
      const realPrice = this.priceswap * 10 ** 6;

      if (!realPrice) {
        this.pricestateswap = false;
        return;
      }
      this.createLoading = true;
      const createTxHash = await sendTransaction({
        to: config.NFTSwap,
        gas: 960000,
        data: NFTSwapInterface.encodeFunctionData('createOrder', [
          tokenId || tokenIdx,
          realPrice,
        ]),
      });

      const createTx = await provider.waitForTransaction(createTxHash);
      this.createLoading = false;
      if (createTx.status === 1) {
        __g_root__.$bvToast.toast(this.$('createSuccess'), {
          title: this.$t('tip'),
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast(this.$('createFail'), {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
    },
    async onCancel() {
      const { tokenIdx, tokenId } = this.$route.query;
      this.cancelLoading = true;
      const cancelTxHash = await sendTransaction({
        to: config.NFTSwap,
        gas: 960000,
        data: NFTSwapInterface.encodeFunctionData('cancelOrder', [
          tokenId,
        ]),
      });
      const cancelTx = await provider.waitForTransaction(cancelTxHash);
      this.cancelLoading = false;

      if (cancelTx.status === 1) {
        __g_root__.$bvToast.toast(this.$('cancelSuccess'), {
          title: this.$t('tip'),
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast(this.$('cancelFail'), {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
    },

    // onUpdateClick() {

    // },
    async onUpdate() {
      const { tokenIdx, tokenId } = this.$route.query;
      // console.log(tokenIdx, tokenId);
      const realPrice = this.price * 10 ** 6;

      if (!realPrice) {
        this.pricestateswap = false;
        return;
      }
      this.updateLoading = true;
      const cupdateTxHash = await sendTransaction({
        to: config.NFTSwap,
        gas: 960000,
        data: NFTSwapInterface.encodeFunctionData('updateOrder', [
          tokenId || tokenIdx,
          realPrice,
        ]),
      });

      const updateTx = await provider.waitForTransaction(cupdateTxHash);

      if (updateTx.status === 1) {
        __g_root__.$bvToast.toast(this.$('updateSuccess'), {
          title: this.$t('tip'),
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast(this.$('updateFail'), {
          title: this.$t('tip'),
          variant: 'danger',
          autoHideDelay: 5000,
        });
      }
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
  margin-top: 48px;
  .buy-btn {
    margin-right: 12px;
  }
}

.popover-button-wrapper {
  .ok-btn {
    width: 78px;
    margin-left:  24px;
  }
  .cancel-btn {
    width: 64px;
  }
}

.info-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
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
