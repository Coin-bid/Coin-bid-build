<template>
  <div
    class="app-wrapper">
      <div class="fixed-header">
        <navbar />
      </div>
      <router-view v-if="user.loaded"/>
      <LatestNews />
      <footerbar />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/Navbar.vue';
import Footerbar from './components/Footerbar.vue';
import LatestNews from '@/components/LatestNews.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footerbar,
    LatestNews,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    })
  },
  created() {
    console.log(this.$bvToast);
    // require('@/initEnums');
  },
  methods: {
    // handleClickOutside() {
    //   this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    // }
  },
};
</script>

<style lang="scss" scoped>
  // @import "~@/styles/mixin.scss";
  // @import "~@/styles/variable.scss";

  // .app-wrapper {
  //   @include clearfix;
  //   position: relative;
  //   height: 100%;
  //   width: 100%;

  //   &.mobile.openSidebar {
  //     position: fixed;
  //     top: 50px;
  //   }
  // }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 50px;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    height: 124px;
  }

  .hideSidebar {
    .fixed-header {
      width: 100%;
    }
    .main-container {
      width: 100%;
      margin-left: 0 !important;
    }
  }
</style>
