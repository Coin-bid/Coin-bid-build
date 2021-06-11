<template>
    <b-container fluid="lg" >
      <div class="price-section">
        <h4 class="title"><img src="../img/icon-dolar@2x.png" alt=""> 价格</h4>
        <div class="price-trend">
          <div class="chart-wrapper">
            <div class="trend-chart">
              <v-charts
                :option="option"
              />
            </div>

          </div>

          <div class="time-wrapper">
            <div class="top-bar">
              <span class="week">
                <i class="circle"></i>
                This Week</span>
              <span class="month">
                <i class="circle"></i>
                This Month</span>
            </div>
            <div class="time">
              <span class="icon">
                <img src="../img/icon-time@2x.png" alt="">

              </span>
              <span class="label">竞价结束倒计时</span>
              <span class="time-text">2h 25m 24s</span>
            </div>
            <div class="price">
              <span class="icon">
                <img src="../img/icon-bid@2x.png" alt="">
              </span>
              <span class="price-text">$65.00</span>

              <div class="button-wrapper">
                <b-button variant="primary" size="sm">出价</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
export default {
  data() {
    return {
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
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          smooth: true,
          showSymbol: false,
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        }, {
          smooth: true,
          showSymbol: false,
          data: [250, 330, 124, 18, 435, 247, 160],
          type: 'line',
        }],
      },
    };
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
