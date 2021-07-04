<template>
  <div class="top-section">
    <div class="bg-bar">
    </div>
    <div class="info-bar">
      <div class="img-wrapper">
      <img src="../img/avatar@2x.png" alt="">
      </div>
      <!-- <div class="name">Mr. Alain Cartwright</div> -->
      <div class="address">
        地址：{{address}}
        <img class="copy" src="../img/copy@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  height: 312px;
  background: #FFFFFF;
  box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
}

.bg-bar {
  height: 222px;
  background: url(../img/bg@2x.png) center / auto 100% no-repeat;
  // box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
}

.info-bar {
  // display:
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-wrapper {
  display: inline-block;
  width: 126px;
  height: 126px;
  border-radius: 50%;
  // background: red;
  margin-top: -140px;
  & img {
    width: 100%;
    height: 100%;
  }
}

.name {
  color: #00D750;
  font-size: 20px;
  margin-top: 20px;
  line-height: 20px;
}
.address {
  color: #ABAFB3;
  font-size: 16px;
  line-height: 16px;
  margin-top: 20px;

  .copy {
    cursor: pointer;
    width: 17px;
    vertical-align: top;
    margin-left: 4px;
  }
}
</style>
