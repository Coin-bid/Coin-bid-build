<template>
  <b-container fluid="lg" class="my-works">
    <div class="list" :no-gutters="true">
      <div class="first-col" >
        <div class="first-card">
          User Art Works
        </div>
        <div class="work-card">
          <div class="img-wrapper">
          <img src="@/assets/img/my-work-3@2x.png" alt="">
          </div>
         <div class="info">
          <div class="name">
            <span>维也纳是美丽的城市</span>
            <span>$ 0.05</span>
          </div>
          <div class="name-sub">
            <span>Daily output：568CBD</span>
            <span>an hours left</span>
          </div>
         </div>
        </div>
      </div>
      <div class="second-col">
        <div class="work-card">
          <div class="img-wrapper">
          <img src="@/assets/img/my-work-1@2x.png" alt="">
          </div>
          <div class="info">
            <div class="name">
              <span>维也纳是美丽的城市</span>
              <span>$ 0.05</span>
            </div>
            <div class="name-sub">
              <span>Daily output：568CBD</span>
              <span>an hours left</span>
            </div>
          </div>
        </div>
        <div class="work-card">
          <div class="img-wrapper">
          <img src="@/assets/img/my-work-4@2x.png" alt="">
          </div>
           <div class="info">
            <div class="name">
              <span>维也纳是美丽的城市</span>
              <span>$ 0.05</span>
            </div>
            <div class="name-sub">
              <span>Daily output：568CBD</span>
              <span>an hours left</span>
            </div>
          </div>
        </div>
      </div>
      <div class="last-col">
        <div class="work-card">
          <div class="img-wrapper">
          <img src="@/assets/img/my-work-2@2x.png" alt="">
          </div>
          <div class="info">
            <div class="name">
              <span>维也纳是美丽的城市</span>
              <span>$ 0.05</span>
            </div>
            <div class="name-sub">
              <span>Daily output：568CBD</span>
              <span>an hours left</span>
            </div>
          </div>
        </div>
        <div class="last-card">
          <b-button variant="primary" @click="$router.push('/auction/user')">View More</b-button>
        </div>
      </div>
    </div>
    </b-container>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.my-works {
  margin-bottom: 100px;
}

.list {
  display: flex;
}

.first-card,
.last-card,
.work-card {
  box-shadow: 0px 3px 30px 0px rgba(205, 204, 211, 0.5);
  border-radius: 5px;
  width: 380px;
  height: 280px;
}

.work-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    height: 88px;
    padding: 0 9px;
    // font-size: 22px;
    position: absolute;
    z-index: 1;
    color: #00D750;
    background: #fff;
    width: 100%;
    left: 0;
    bottom: 0;
    display: none;
    & .name {
      margin-top: 18px;
      line-height: 16px;
      color: #00D750;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
    }
    & .name-sub {
      margin-top: 18px;
      color: #999999;
      font-size: 14px;
      line-height: 14px;
      display: flex;
      justify-content: space-between;
    }
  }

  &:hover {
    .info {
      display: block;
    }
  }
}

.img-wrapper {
  width: 100%;
  height: 100%;
}

.first-col {
  flex-grow: 0;
  margin-right: 30px;
  .first-card {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 34px;
  }
}

.second-col {
  width: 380px;
  flex-grow: 0;
  margin-right: 30px;
  .work-card {
    height: 280px;
    overflow: hidden;
    &:nth-child(1) {
      margin-bottom: 34px;
    }
  }
}

.last-col {
  width: 380px;
  flex-grow: 0;

  .work-card {
    height: 280px;
    overflow: hidden;
    &:nth-child(1) {
      margin-bottom: 34px;
    }
  }

  .last-card {
    margin-top: 32px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

@media (max-width: 992px) {
  .list {
    display: block;
  }

  .first-col,
  .second-col,
  .last-col {
      width: 100%;

    margin-right: 0;
    & .first-card,
    & .last-card,
    & .work-card {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 24px;

      & img {
        width: 100%
      }
    }
  }

}

</style>
