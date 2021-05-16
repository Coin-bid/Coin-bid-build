<template>
  <b-container class="latest-news" fluid="lg">
    <b-row align-v="center" align-h="center">
      <b-col cols="auto" >
        <div class="sign-up-card">
          <h2>Sign Up For The Latest News From Coin Bid</h2>
          <div class="input-wrapper">
            <input type="text">
            <b-button class="sub-btn" variant="primary">
            <img src="@/assets/img/icon-send@2x.png" alt="">
              Subscribe</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.latest-news {
  margin-bottom: 138px;
}
.sign-up-card {
  width: 1056px;
  height: 300px;
  background: #00D750;
  box-shadow: 0px 13px 20px 0px rgba(0, 215, 80, 0.41);
  border-radius: 5px;
  overflow: hidden;

  text-align: center;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 82px;
    margin-bottom: 0;
    font-size: 36px;
  }

  .input-wrapper {
    width: 660px;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 18px 0px rgba(205, 204, 211, 0.5);
    border-radius: 40px;
    margin-top: 38px;
    display: flex;
    align-items: center;
    padding: 5px;
    & input {
      height: 70px;
      flex-grow: 1;
      border: 0;
      padding-left: 24px;
      background: transparent;
      outline: 0;
      font-size:22px;
    }
    & .sub-btn {
      width: 269px;
      height: 70px;
      background: #00D750;
      border-radius: 35px;
      font-size: 24px;
      border: 0;
      & img {
        width: 34px;
        margin-right: 10px;
      }
    }
  }

}
</style>
