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
           <!-- <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-miner@2x.png" alt="">
              <span>Price</span></div>
            <div class="info-content red">200 $</div>
          </div> -->
          <div class="info-row">
            <div class="info-label">
              <img src="../img/icon-intro@2x.png" alt="">
              <span>introduction of the work</span></div>
            <div class="info-content">{{NFTDetail.description}}</div>
          </div>

          <div class="button-group">
            <b-button
              id="popover-reactive-1"
              class="buy-btn"
              variant="primary"
              size="lg"
              :disabled="createLoading"
              v-if="!isInOrder"
            >Swap</b-button>
            <b-button
              id="popover-reactive-2"
              class="buy-btn"
              variant="primary" size="lg"
              :disabled="updateLoading"
            >Update price</b-button>
            <b-button
              class="buy-btn"
              size="lg"
              variant="danger"
              @click="onCancel"
              :disabled="cancelLoading"
              v-if="isInOrder"
            >Cancel swap</b-button>

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
                Price
              </template>

              <div>
                <b-form-group
                  label="Price"
                  label-for="popover-input-1"
                  label-cols="4"
                  :state="pricestateswap"
                  invalid-feedback="Please input number"
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
                  <b-button @click="onSwapClose" class="cancel-btn" size="sm" variant="danger">Cancel</b-button>
                  <b-button @click="onCreate" :disabled="createLoading" class="ok-btn" size="sm" variant="primary">Confirm</b-button>
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
                Price
              </template>

              <div>
                <b-form-group
                  label="Price"
                  label-for="popover-input-1"
                  label-cols="4"
                  :state="pricestate"
                  invalid-feedback="Please input number"
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
                  <b-button @click="onClose" class="cancel-btn" size="sm" variant="danger">Cancel</b-button>
                  <b-button @click="onUpdate" :disabled="updateLoading" class="ok-btn" size="sm" variant="primary">Confirm</b-button>
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
import {
  NFTSwapContract, NFTSwapInterface, provider,
} from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

export default {
  props: ['NFTDetail', 'isInOrder'],
  data() {
    return {
      popoverShowSwap: false,
      popoverShow: false,

      priceswap: 0,
      pricestateswap: null,

      price: 0,
      pricestate: null,

      createLoading: false,
      cancelLoading: false,
      updateLoading: false,
      // NFTDetail: {},
    };
  },
  created() {
    // this.getDetail();
  },

  methods: {

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
        __g_root__.$bvToast.toast('Create success', {
          title: 'Tips',
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Create fail, please retry', {
          title: 'Tips',
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
        __g_root__.$bvToast.toast('Cancel success', {
          title: 'Tips',
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Cancel fail, please retry', {
          title: 'Tips',
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
        __g_root__.$bvToast.toast('Update success', {
          title: 'Tips',
          variant: 'success',
          autoHideDelay: 5000,
        });
      } else {
        __g_root__.$bvToast.toast('Update fail, please retry', {
          title: 'Tips',
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
