<template>
  <div class="artists-card">
    <div class="avatar-wrapper">
      <img src="~@/assets/img/avatar-1@2x.png" alt="" class="avatar">
      <div class="name-wrapper">
        <div class="name">Fernando Soler</div>
        <div class="position">Telecommunication Engineer</div>
      </div>
    </div>
    <div class="intro">
      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
    </div>
  </div>
</template>

<style lang="scss" scoped>
.artists-card {
  width: 408px;
  height: 296px;
  background: #FFFFFF;
  box-shadow: 0px 3px 30px 0px rgba(205, 204, 211, 0.5);
  border-radius: 5px;
  padding: 46px 48px;
  padding-right: 24px;

  .avatar-wrapper {
    display: flex;
    align-items: center;
    img {
      width: 72px;
      margin-right: 25px;
    }

    .name {
      color: #00D750;
      font-size: 18px;
      font-weight: bold;
    }

    .position {
      font-weight: bold;
      color: #263238;
      white-space: normal;
      padding-right: 24px;
    }

  }
  & .intro {
    line-height: 32px;
    margin: 30px;
    // font-weight: bold;
    white-space: normal;
    color: #324148;
    font-size: 18px
  }
}

</style>
