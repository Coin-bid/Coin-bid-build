<template>
  <div class="work-card">
    <div class="work-pic-wrapper">
      <img class="work-pic" :src="require('../img/canvas@2x.png')" alt="">
    </div>
    <div class="info">
      <div class="row-1">
        <span>Daily output：1CBD</span>
        <span class="price">$ 0.05</span>
      </div>
      <!-- <div class="row-2"> -->
        <!-- <span>Daily output：1CBD</span> -->
        <!-- <span>Ξ 0.05</span> -->
        <!-- <span>an hours left</span> -->
      <!-- </div> -->
      <!-- <div class="row-3">
         <span>
           <img src="@/assets/img/icon-lock@2x.png" alt="">
         </span>
        <span>an hours left</span>
      </div> -->
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
  width: 285px;
  height: 250px;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 3px 20px 0px rgba(205, 204, 211, 0.5);
  padding: 10px 10px 0;
  cursor: pointer;

  .work-pic-wrapper {
    height: 195px;
    width: 265px;
    flex-shrink: 0;
  }

  .work-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    margin-top: 14px;
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
      color: #000000;
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 12px;

      & .price {
        color: #FF6600;
      }
    }

    .row-2 {
      color: #999999;
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 12px;
    }
  }

  &:hover {
    background: #00D750;

    .info  {
      .row-1,
      .row-2,
      .row-3 {
        color: #fff;

        & .price {
          color: #fff;
        }
      }
    }

  }
}

@media (max-width: 992px) {

}

@media (max-width: 576px) {
  .work-card {
    width: 100%;

    .work-pic-wrapper {
      width: 100%;
    }
    .work-pic {
      width: 100%;

    }
  }
}
</style>
