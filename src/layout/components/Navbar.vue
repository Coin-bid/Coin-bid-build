<i18n>
{
  "en": {
    "home": "Home",
    "auction": "Auction",
    "governance": "Governance",
    "introduce": "Introduce",
    "signUp": "登录",
    "whitePaper": "White Paper"
  },
  "zh": {
    "home": "首页",
    "auction": "拍卖",
    "governance": "治理",
    "introduce": "介绍",
    "signUp": "登录",
    "whitePaper": "白皮书"
  }
}
</i18n>
<template>
  <b-navbar
    class="navbar"
    toggleable="lg"
    :variant="(atTop && isHome) ? '' : 'light'"
    type="light"
    fixed="top"
  >

    <b-container fluid="lg">
      <b-navbar-brand href="/">
        <img class="logo" src="@/assets/img/logo@2x.png" alt="">
      </b-navbar-brand>

      <b-navbar-toggle
        @click="onToggleClick"
        target="nav-collapse"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="$route.path === '/'"  @click="$router.push('/')">{{$t('home')}}</b-nav-item>
          <b-nav-item :active="$route.path.startsWith('/auction')" @click="$router.push('/auction')">{{$t('auction')}}</b-nav-item>
          <b-nav-item :active="$route.path.startsWith('/governance')"  @click="onClickGovernance">{{$t('governance')}}</b-nav-item>
          <!-- <b-nav-item href="/blog">Blog</b-nav-item> -->
          <b-nav-item :active="$route.path.startsWith('/introduce')" @click="$router.push('/introduce')">{{$t('introduce')}}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <b-nav-item-dropdown :text="langText" right>
            <b-dropdown-item href="#" @click="changeLang('en')">English</b-dropdown-item>
            <b-dropdown-item href="#" @click="changeLang('zh')">简体中文</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-button class="lang-switch" variant="link">English</b-button> -->
            <b-button
              v-if="user.address"
              class="address-btn"
              variant="link"
              to="/mine"
            >
              {{user.address | ellipsis}}
            </b-button>
           <b-button
              v-else
              size="sm"
              class="sign-btn"
              variant="outline-primary"
              @click="unlock"
            >
              <img src="@/assets/img/icon-user@2x.png" alt="">
            {{$t('signUp')}}</b-button>

          <b-button
            size="sm"
            class="whitepaper-btn"
            variant="outline-primary"
            target="_blank"
            href="https://gateway.pinata.cloud/ipfs/QmY7SefA5JGuy2AJC8jdhQkNt2AKmBkse5bk5cpp9Xmgk1/COIN%20BID%20English%20version.pdf"
          >
            <img src="@/assets/img/icon-baipishu@2x.png" alt="">
          {{$t('whitePaper')}}</b-button>


          <!-- <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { setLang, getLang } from "@/common/lang"

export default {
  filters: {
    ellipsis(address) {
      return address.replace(/^(.{4}).*(.{3})$/, '$1...$2');
    }
  },
  data() {
    return {
      lang: getLang(),
      atTop: true,
      expand: false,

    };
  },
  computed: {
    ...mapState(['user']),
    isHome() {
      return this.$route.path === '/';
    },
    langText() {
      const langMap = {
        zh: '简体中文',
        en: 'English',
      }
      return langMap[this.lang];
    }
  },
  mounted() {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 0) {
        this.atTop = false;
      } else {
        this.atTop = true;
      }
    });
  },

  methods: {
    onToggleClick() {
      this.expand = !this.expand;
    },
    changeLang(lang) {
      setLang(lang);
      location.reload();
    },
    ...mapActions(['showComingSoon']),

    unlock() {
      this.$store.dispatch('unlockByMetaMask');
      // __g_account__.unlockByMetaMask();
    },

    onClickGovernance() {
      window.open('https://gov.coin-bid.io/#/');
    }
    // onClick() {
    //   __g_root__.$bvToast.toast('Coming soon...', {
    //     title: 'Notice',
    //     autoHideDelay: 5000,
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 124px;
  margin-right: 48px;
}

.navbar-nav {
  align-items: center;
  & .nav-item {
    color: #000;
    margin-right: 24px;

    .nav-link {
      color: #000000;
      text-align: center;
      font-size: 16px;
      // width: 76px;
      padding: 0 12px;
      display: inline-block;
      height: 26px;
      line-height: 26px;
      border-radius: 13px;
      &.active {
        background: #00D750;
        color: #fff;

      }
    }
  }
  .address-btn {
    margin-right: 12px;
    color: #000000;

    &:hover {
      // color: #00D750;
    }
  }
}

.lang-switch {
  color: #000000;
  margin-right: 12px;
}

.sign-btn,
.whitepaper-btn {
  height: 40px;
  padding: 0.25rem 1rem;
  font-weight: bold;
  background: #fff !important;
  color: #00D750 !important;
  line-height: 30px;
  // &:hover,
  // &:active {

  // }
  & img {
    width: 18px;
  }
}
.sign-btn {

  margin-right: 10px;
}

.navbar {
  padding: 40px 1rem;
  // background-color: transparent !important;

  &.bg-light {
    background-color: #fff !important;
    box-shadow: 0px 8px 20px 0px rgba(153, 153, 153, 0.12);
  }
}

@media (max-width: 1200px) {
  .navbar {
    background-color: #fff !important;
  }

  .navbar-nav {
    .nav-item {
      margin-right: 0;
    }
  }
}

@media (max-width: 992px) {
  .navbar-nav {
    .nav-item {
      padding: 8px 0;
    }

    .btn {
      margin-top: 12px;
    }
  }
}
</style>
