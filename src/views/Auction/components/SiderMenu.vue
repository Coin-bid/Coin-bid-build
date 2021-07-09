<i18n>
{
  "en": {
    "auction": "Auction works",
    "transfer": "Transfer of works"

  },
  "zh": {
    "auction": "拍卖作品",
    "transfer": "转让作品"
  }
}
</i18n>

<template>
  <div class="sider-menu">
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <div
      v-for="item in menuList"
      class="menu-item"
      :class="{active: item.active}"
      @click="$router.push(item.path)"
    >
      <img :src=" item.active ? item.aIcon : item.icon">
      <span class="text">{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

  computed: {
    menuList() {
      return [
        // {
        //   label: '拍卖画布',
        //   path: '/auction/cover',
        //   icon: require('../img/icon-cover-active@2x.png'),
        //   aIcon: require('../img/icon-cover@2x.png'),
        //   active: this.$route.path === '/auction/cover',
        // },

        {
          label: this.$t("auction"),
          path: '/auction/works',
          icon: require('../img/icon-works-active@2x.png'),
          aIcon: require('../img/icon-works@2x.png'),
          active: this.$route.path === '/auction/works',
        },
        {
          label: this.$t("transfer"),
          path: '/auction/user',
          icon: require('../img/icon-user-active@2x.png'),
          aIcon: require('../img/icon-user@2x.png'),
          active: this.$route.path === '/auction/user',
        },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.sider-menu {
  width: 210px;
  box-shadow:  20px -20px 20px 0px rgba(153, 153, 153, 0.12);
  padding: 24px 0;
}

.menu-item {
  height: 58px;
  line-height: 58px;
  color: #333333;
  cursor: pointer;
  // text-align: center;
  padding-left:28px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  align-items: center;

  // .icon-wrapper {
  //    width: 20px;
  //    height: 20px;
  //    display: inline-block;
  // }
  & img {
    width: 20px;
    // vertical-align: middle;
  }
  & .text {
    margin-left: 14px;
  }
  &.active {
    color: #fff;
    background: #00D750;
  }
}

@media (max-width: 992px) {
  .sider-menu {
    width: 76px;
    .text {
      display: none;
    }
  }
}

@media (max-width: 540px) {
  .sider-menu {
    display: flex;
    width: auto;
    box-shadow: none;

    & .menu-item {
      padding-left: 28px;
      padding-right: 28px;
      flex-grow: 1;
      justify-content: center;
    }
  }
}
</style>
