<template>
  <div class="work-card">
    <img class="work-pic" :src="img" alt="">
    <div class="info">
      <div class="row-1">
        <span>CryptoGlads</span>
        <span>Price</span>
      </div>
      <div class="row-2">
         <span>ArenaGlad#143</span>
        <span>Ξ 0.05</span>
      </div>
      <div class="row-3">
         <span>
           <img src="@/assets/img/icon-lock@2x.png" alt="">
         </span>
        <span>an hours left</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img'],
};
</script>

<style lang="scss" scoped>
.work-card {
  width: 380px;
  height: 410px;
  background: #FFFFFF;
  box-shadow: 0px 3px 30px 0px rgba(205, 204, 211, 0.5);
  padding: 10px 10px 0;

  .work-pic {
    width: 360px;
    height: 260px;
  }

  .info {
    padding: 25px 15px;
    .row-1,
    .row-2,
    .row-3 {
      display: flex;
      justify-content:space-between;
      font-size:16px;
    }
    img {
      width: 14px;
    }

    .row-1 {
      color: #999999;
      font-size: 16px;
      margin-bottom: 12px;
    }

    .row-2 {
      font-size: 18px;
      color: #00D750;
      margin-bottom: 12px;
    }

    .row-3 {
      font-size: 14px;
      color: #999999;
    }
  }

  &:hover {
    background: #00D750;

    .info  {
       .row-1,
      .row-2,
      .row-3 {
        color: #fff;
      }
    }

  }
}
</style>
