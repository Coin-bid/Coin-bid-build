<template>
  <b-container fluid="lg" class="my-works">
    <div class="list" :no-gutters="true">
      <div class="first-col" >
        <div class="first-card">
          My owned creations
        </div>
        <div class="work-card">
          <img src="@/assets/img/my-work-3@2x.png" alt="">
          <div class="name">Discover super artists</div>
        </div>
      </div>
      <div class="second-col">
        <div class="work-card">
          <img src="@/assets/img/my-work-1@2x.png" alt="">
          <div class="name">The Throne of Trump</div>
        </div>
        <div class="work-card">
          <img src="@/assets/img/my-work-4@2x.png" alt="">
          <div class="name">Spread the Joy</div>
        </div>
      </div>
      <div class="last-col">
        <div class="work-card">
          <img src="@/assets/img/my-work-2@2x.png" alt="">
          <div class="name">Where Did Macy Go?</div>
        </div>
        <div class="last-card">
          <b-button variant="primary">View More</b-button>
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
}

.work-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px 0;
  img {
    width: 410px;
  }
  .name {
    line-height: 60px;
    font-size: 22px;
    color: #00D750;
  }
}

.first-col {
  width: 430px;
  flex-grow: 0;
  margin-right: 25px;
  .first-card {
    width: 430px;
    height: 228px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 26px;
  }
}

.second-col {
  width: 360px;
  flex-grow: 0;
  margin-right: 25px;
  .work-card {
    &:nth-child(1) {
      margin-bottom: 34px;
    }
    img {
      width: 340px;
    }
  }
}

.last-col {
  width: 360px;
  flex-grow: 0;

  .work-card {
    &:nth-child(1) {
      margin-bottom: 34px;
    }
    img {
      width: 340px;
    }
  }

  .last-card {
    margin-top: 32px;
    height: 290px;
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
