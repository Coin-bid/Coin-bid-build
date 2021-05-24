<template>
  <div class="footer">
    <b-container fluid="lg">
      <b-row class="contact-bar" >
        <b-col class="contact-col" cols="4" lg="2">
          <h5>COMPANY</h5>
          <a target="_blank" href="">About Us</a>
          <br>
          <a target="_blank" href="">Team</a>
          <br>
          <a target="_blank" href="">Help Center</a>
          <br>
          <a target="_blank" href="">Suggestions</a>
          <br>
          <a target="_blank" href="">Voting</a>
        </b-col>
        <b-col class="contact-col"  cols="4" lg="2">
          <h5>MEDIA LINK</h5>
          <a target="_blank" href="https://twitter.com/CoinBid1">Twitter</a>
          <br>
          <a target="_blank" href="https://www.facebook.com/CoinBidNFT.io">Facebook</a>
          <br>
          <a target="_blank" href="https://youtube.com/channel/UCixE0PUHuHfEPTCTsoYO1Fw">Youtube</a>
          <br>
          <a target="_blank" href="https://t.me/Coinbidnft ">Telegram</a>
          <!--  medium.com https://medium.com/@CoinBid1 -->
           <br>
          <a target="_blank" href="https://discord.gg/RdNrCRcKdm">Discord</a>
        </b-col>
        <b-col class="contact-col"  cols="4" lg="2">
          <h5>LEGAL</h5>
          <a href="">Privacy</a>
          <br>
          <a href="">Terms</a>
          <br>
          <a href="">Security</a>
        </b-col>
        <b-col cols="12"  lg="4" class="blog-card-container  ml-auto">
          <div class="blog-card">
            <h4 class="title">Blog Coin Bid</h4>
            <div class="label">Write email to us in</div>
            <div class="email">contact@coin-bid.io</div>
            <b-button class="sign-btn" variant="primary" size="lg">
              <img src="@/assets/img/icon-user@2x.png" alt="">
              Mail to us</b-button>
          </div>
        </b-col>
      </b-row>

      <b-row class="footer-bar" align-h="between" align-v="center">
        <b-col cols="12" lg="6">
          <img class="logo" src="@/assets/img/logo@2x.png" alt="">
        </b-col>
        <b-col cols="12"  lg="6">
          <div class="copy">© Copyright 2021 Coin Bid Capital Pty Ltd (ABN 45 4545 88888).</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['showComingSoon']),
  },
};
</script>

<style lang="scss" scoped>

.footer {
  background: url(~@/assets/img/footer-bg@2x.png) 115% 100% / auto 75px no-repeat;
}

.contact-bar {
  padding-bottom: 118px;
  // width: 100%;
  h5 {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }

  a {
    color: #607D8B;
    font-size:16px;
    margin-top: 12px;
    display: inline-block;
  }

  .blog-card-container {
    display: flex;
    justify-content: flex-end;
  }

  .blog-card {
    width: 280px;
    height: 258px;
    background: #00D750;
    border-radius: 5px;
    color: #fff;
    padding: 40px 56px;
    .title {
      color: #EFF7E7;
      font-size: 18px;
    }

    .label {
      color: #EFF7E7;
      font-size: 16px;
    }

    .email {
      color: #EFF7E7;
      font-size: 16px;
      font-weight: bold;
    }

    .sign-btn {
      background: #fff;
      color: #00D750;
      margin-top: 16px;
      font-size: 16px;
      border: 0;
      font-weight: bold;
      & img {
        width: 18px;
      }
    }
  }
}

.footer-bar {
  border-top: 1px solid #EEEEEE;
  height: 200px;
  .logo {
    width: 170px;
  }
  .copy {
    color: #607D8B;
    font-size: 14px;
    text-align: right;
  }
}

@media (max-width: 992px) {

  .footer {
    background: url(~@/assets/img/footer-bg@2x.png) 20% 100% / auto 75px no-repeat;
    // background-position: ;
  }

  .footer-bar {
    .copy {
      text-align: left;
    }
  }

  .contact-bar {

    & .contact-col {
      margin-bottom: 24px;
    }

    & .blog-card-container {
      justify-content: flex-start;
      & .blog-card {
        width: 100%;
      }
    }
  }
}

</style>
