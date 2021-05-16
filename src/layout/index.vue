<template>
  <div
    class="app-wrapper">
      <div class="fixed-header">
        <navbar />
      </div>
      <router-view />
      <footerbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footerbar from './components/Footerbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footerbar,
  },
  computed: {

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
    height: 130px;
    // position: fixed;
    // top: 0;
    // right: 0;
    // z-index: 9;
    // // transition: width 0.28s;
    // height: 50px;
    // width: 100%;
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
