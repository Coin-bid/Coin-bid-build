<template>
  <b-navbar
    class="navbar"
    toggleable="lg"
    :variant="atTop ? '' : 'light'"
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
          <b-nav-item :active="true" href="/">Home</b-nav-item>
          <b-nav-item @click.prevent="showComingSoon" href="/auction">Auction</b-nav-item>
          <b-nav-item @click.prevent="showComingSoon" href="/governance">Governance</b-nav-item>
          <!-- <b-nav-item href="/blog">Blog</b-nav-item> -->
          <b-nav-item @click.prevent="showComingSoon" href="/introduce">Introduce</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-button class="lang-switch" variant="link">English</b-button>

          <b-button
            size="sm"
            class="sign-btn"
            variant="outline-primary"
          >
            <img src="@/assets/img/icon-user@2x.png" alt="">
          Sign Up</b-button>

          <b-button
            size="sm"
            class="whitepaper-btn"
            variant="outline-primary"
            target="_blank"
            href="https://gateway.pinata.cloud/ipfs/QmY7SefA5JGuy2AJC8jdhQkNt2AKmBkse5bk5cpp9Xmgk1/COIN%20BID%20English%20version.pdf"
          >
            <img src="@/assets/img/icon-baipishu@2x.png" alt="">
          White Paper</b-button>


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
import { mapActions } from 'vuex';


export default {

  data() {
    return {
      atTop: true,
      expand: false,
    };
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
    ...mapActions(['showComingSoon'])
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
      &.active {
        background: #00D750;
        color: #fff;
        width: 76px;
        height: 26px;
        line-height: 26px;
        border-radius: 13px;
        padding: 0;
      }
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
  }
}

@media (max-width: 992px) {
  .navbar {
    background-color: #fff !important;
  }

  .navbar-nav {
    .nav-item {
      margin-right: 0;
    }
  }
}
</style>
