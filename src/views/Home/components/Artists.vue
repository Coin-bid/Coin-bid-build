<template>
  <div class="artists">
    <b-container fluid="lg" class="op-bar">
      <h2 class="title">
        What artists like you are saying about Cion Bid
      </h2>
    </b-container>
    <div class="list">
      <ArtistCard class="card"/>
      <ArtistCard class="card"/>
      <ArtistCard class="card"/>
      <ArtistCard class="card"/>
    </div>
    <b-container fluid="lg" class="op-bar">
      <b-button class="left-btn" variant="primary">
        <img src="~@/assets/img/arrow-left@2x.png" alt="">
      </b-button>
      <b-button class="right-btn" variant="light">
        <img src="~@/assets/img/arrow-right@2x.png" alt="">
      </b-button>
    </b-container>
  </div>
</template>

<script>
import ArtistCard from './ArtistCard.vue';

export default {
  components: {
    ArtistCard,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.artists {
  margin-bottom: 160px;
}

.title {
  margin: 0;
  height: 155px;
  font-size:36px;
  font-weight: bold;
  color: #000000;
  line-height: 45px;
  width: 447px;
  background: url(~@/assets/img/quota_bg@2x.png) left top / 155px auto no-repeat;
}

.list {
  white-space: nowrap;
  overflow: auto;
  padding: 56px 0;
  @include hideScrollBar;

  .card {
    display: inline-block;
    margin: 0 20px;
  }
}
.left-btn,
.right-btn {
  width: 64px;
  height: 64px;
  background: #00D750;
  box-shadow: 0px 10px 30px 0px rgba(0, 215, 80, 0.4);
  border-radius: 50%;
  font-size: 0;
  border: 0;
  & img {
    width: 14px;
  }
}

.right-btn  {
  background: #fff;
}

.left-btn {
  margin-right: 16px;
}

.op-bar {
}
</style>
