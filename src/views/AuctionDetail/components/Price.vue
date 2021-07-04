<template>
    <b-container fluid="lg" >
      <div class="price-section">
        <h4 class="title"><img src="../img/icon-dolar@2x.png" alt=""> Price</h4>
        <div class="price-trend">
          <div class="chart-wrapper">
            <div class="trend-chart">
              <v-charts
                :option="option"
              />
            </div>

          </div>

          <div class="time-wrapper">
            <!-- <div class="top-bar">
              <span class="week">
                <i class="circle"></i>
                This Week</span>
              <span class="month">
                <i class="circle"></i>
                This Month</span>
            </div> -->
            <div class="time">
              <span class="icon">
                <img src="../img/icon-time@2x.png" alt="">

              </span>
              <span class="label">Countdown of bidding</span>
              <!-- <span class="time-text">2h 25m 24s</span> -->
              <span class="time-text">{{remainTime}}</span>
            </div>
            <div class="price">
              <span class="icon">
                <img src="../img/icon-bid@2x.png" alt="">
              </span>
              <span class="price-text">${{(auction.lastPrice / 10 ** 6).toFixed(2) || 0}}</span>

              <div class="button-wrapper">
              <b-button v-if="remainTime === 'end'"  class="buy-btn" variant="primary" size="sm" @click="endAuction">End auction</b-button>
              <b-button v-else id="popover-reactive-1" class="buy-btn" variant="primary" size="sm" >Bid</b-button>
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
                  Price
                </template>

                <div>
                  <b-form-group
                    label="Price"
                    label-for="popover-input-1"
                    label-cols="4"
                    :state="pricestate"
                    invalid-feedback="Can not less than last bid price"
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
                    <b-button @click="onOk" :disabled="submitting" class="ok-btn" size="sm" variant="primary">Confirm</b-button>
                  </div>
                </div>
              </b-popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
import moment from 'moment';
import config from '@/config';
import { isNumber } from 'lodash';
import queryQl from '@/common/queryQl';
import { BigNumber } from 'ethers';
import {
  NFTAuctionContract, NFTAuctionInterface, USDTContract, USDTInterface, provider,
} from '@/eth/ethereum';
import sendTransaction from '@/common/sendTransaction';

console.log(NFTAuctionContract);

let timeoutId = '';
export default {
  props: {
    auction: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      popoverShow: false,

      price: 0,
      pricestate: null,
      submitting: false,

      remainTime: '',

      option: {
        color: ['#00D750', '#FDA23F'],
        tooltip: {
          show: true,
          trigger: 'axis',
        },
        grid: {
          containLabel: true,
          left: 0,
          top: 20,
          right: 20,
          bottom: 10,
        },
        xAxis: {
          type: 'time',
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: {
          smooth: true,
          showSymbol: false,
          data: [],
          type: 'line',
        },
      },
    };
  },

  computed: {
    // endTime() {
    //   return new moment(this.auction.endAt * 1000).format("YYYY-MM-DD HH:mm:ss")
    // }
  },

  created() {
    this.loopTime();
    this.getChangeList();
  },

  beforeDestroy() {
    clearTimeout(timeoutId);
  },

  methods: {

    onClose() {
      this.popoverShow = false;
    },

    async getChangeList() {
      const { tokenId, tokenIdx } = this.$route.query;
      if (tokenId) {
        const { data } = await queryQl(`{
          auctionBidEntities(first: 5,  where: { nftId: ${tokenId} }) {
            id
            nftId
            bidPrice
            bidder
            time
          }
        }`);

        const { auctionBidEntities } = data.data;
        this.changeList = auctionBidEntities;
        this.option.series.data = auctionBidEntities.map((item) => [item.time * 1000, item.bidPrice / 10 ** 6]);

        console.log(this.option.series.data);
      }

      if (tokenIdx) {
        console.log(tokenIdx);
        this.option.series.data = [
          [this.auction.startedAt * 1000, this.auction.lastPrice / 10 ** 6],
        ];
        console.log(this.option.series.data);
      }
    },

    async endAuction() {
      const { tokenIdx, tokenId } = this.$route.query;
      // endAuction

      console.log( tokenIdx, tokenId )
      const auctionEndTxHash = await sendTransaction({
        to: config.NFTAuction,
        gas: 960000,
        data: NFTAuctionInterface.encodeFunctionData('auctionEnd', [
          tokenId || tokenIdx,
        ]),
      });
      const auctionEndTx = await provider.waitForTransaction(auctionEndTxHash);

       if (auctionEndTx.status === 1) {
          __g_root__.$bvToast.toast('End bid success, you owned the works', {
            title: 'Tips',
            variant: 'success',
            autoHideDelay: 5000,
          });
        } else {
          __g_root__.$bvToast.toast('End bid fail, please retry', {
            title: 'Tips',
            variant: 'danger',
            autoHideDelay: 5000,
          });
        }

    },

    async onOk() {
      const { tokenIdx, tokenId } = this.$route.query;

      const realPrice = this.price * 10 ** 6;

      if (!realPrice) {
        this.pricestate = false;
        return;
      }

      const allowance = await USDTContract.allowance(
        ethereum.selectedAddress,
        config.NFTAuction,
      );

      if (allowance.lt(realPrice)) {
        this.submitting = true;
        const approveTxHash = await sendTransaction({
          to: config.USDTContract,
          data: USDTInterface.encodeFunctionData('approve', [
            config.NFTAuction,
            BigNumber.from('9'.repeat(32)).toHexString(),
          ]),
        });

        const approveTx = await provider.waitForTransaction(approveTxHash);

        if (approveTx.status !== 1) {
          __g_root__.$bvToast.toast('授权失败，请重试', {
            title: 'Tips',
            variant: 'danger',
            autoHideDelay: 5000,
          });
          this.submitting = false;
          return;
        }
        console.log(approveTx);
      }

      if (tokenId) {
        if (this.auction.lastPrice.gt(realPrice)) {
          this.pricestate = false;
          return;
        }

        this.pricestate = null;

        this.submitting = true;

        const bidTxHash = await sendTransaction({
          to: config.NFTAuction,
          gas: 960000,
          data: NFTAuctionInterface.encodeFunctionData('bid', [
            tokenId,
            realPrice,
          ]),
        });
        const bidTx = await provider.waitForTransaction(bidTxHash);

        if (bidTx.status === 1) {
          __g_root__.$bvToast.toast('Bid success.', {
            title: 'Tips',
            variant: 'success',
            autoHideDelay: 5000,
          });
        } else {
          __g_root__.$bvToast.toast('Bid fail, please retry.', {
            title: 'Tips',
            variant: 'danger',
            autoHideDelay: 5000,
          });
        }
      }

      if (tokenIdx) {
        console.log('buyfake', tokenIdx, realPrice);

        if (BigNumber.from(200000000).gt(realPrice)) {
          this.pricestate = false;
          return;
        }

        this.pricestate = null;

        this.submitting = true;

        const bidTxHash = await sendTransaction({
          to: config.NFTAuction,
          gas: 960000,
          data: NFTAuctionInterface.encodeFunctionData('bidUninstanted', [
            tokenIdx,
            realPrice,
          ]),
        });
        const bidTx = await provider.waitForTransaction(bidTxHash);

        if (bidTx.status === 1) {
          __g_root__.$bvToast.toast('Bid success.', {
            title: 'Tips',
            variant: 'success',
            autoHideDelay: 5000,
          });
        } else {
          __g_root__.$bvToast.toast('Bid fail, please retry.', {
            title: 'Tips',
            variant: 'danger',
            autoHideDelay: 5000,
          });
        }
      }
      this.submitting = false;
      // const res = await NFTAuctionContract.bidUninstanted(id, this.amount);
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

    loopTime() {
      timeoutId = setTimeout(() => {
        // console.log(new moment(this.auction.endAt * 1000).format('YYYY-MM-DD HH:mm:ss'));
        const diff = new moment(this.auction.endAt * 1000).diff(moment());
        if (diff > 0) {
          const sec = ((diff / 1000) % 60).toFixed(0).padStart(2, '0');
          const min = ((diff / 1000 / 60) % 60).toFixed(0).padStart(2, '0');
          const hour = (diff / 1000 / 60 / 60).toFixed(0).padStart(2, '0');
          this.remainTime = `${hour}:${min}:${sec}`;
        } else {
          this.remainTime = 'end';
        }

        this.loopTime();
      }, 1000);
    },

  },
};
</script>

<style lang="scss" scoped>

.price-section {
  margin-top: 50px;
}

.title {
  font-size:20px;
  line-height:22px;
  color: #333;

  & img {
    height: 22px;
    margin-right:15px;
    vertical-align: bottom;
  }

}

.trend-chart {
  height: 100%;
}
.price-trend {
  margin-top: 36px;
  height: 468px;
  background: #FFFFFF;
  box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
  padding: 40px 60px;
  display: flex;
}

.chart-wrapper {
  width: 640px;
  height: 388px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 70px;
}

.time-wrapper {
  flex-grow: 1;
}

.top-bar {
  display: flex;
  justify-content: flex-end;
  .circle {
    display: inline-block;
    background: #6A707E;
    height: 10px;
    width: 10px;
    border-radius: 5px;
  }

  .week {
    margin-right: 30px;
  }

  .month {
    .circle {
      background: #34D3A5;
    }
  }
}

.time {
  margin-top: 40px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  .icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 71px;
    height: 71px;
    background: linear-gradient(135deg, #FDA23F, #F48665);
    border-radius: 50%;
    margin-right: 28px;
    & img {
      height: 33px;
    }
  }

  .label {
    flex-grow: 1;
  }
  .time-text {
    width: 90px;
    font-weight: bold;
    text-align: center;
  }

}

.price {
  margin-top: 40px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  .icon {
    display: inline-flex;
     justify-content: center;
    align-items: center;
    width: 71px;
    height: 71px;
    background: linear-gradient(135deg, #66FF66, #00D34E);
    border-radius: 50%;
    margin-right: 28px;
      & img {
      height: 33px;
    }
  }

  .price-text {
    flex-grow: 1;
    font-weight: bold;
  }

  .button-wrapper {
    width: 90px;
    text-align: center;
  }

  .buy-btn {
    width: 100px;
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
  .price-trend {
    flex-direction: column;
    height: auto;
    padding: 16px;
  }

  .chart-wrapper {
    width: 100%;
    margin-bottom: 24px;
  }
}

@media (max-width: 540px) {

  // .sort-btn {
  //   margin-top: 24px;
  // }
}

</style>
