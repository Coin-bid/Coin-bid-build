<template>
  <div class="home">
    <Banner/>
    <Auction/>
    <Works/>
    <MyWorks/>
    <Artists/>
    <LatestNews/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from './components/Banner.vue';
import LatestNews from './components/LatestNews.vue';
import Artists from './components/Artists.vue';
import Auction from './components/Auction.vue';
import MyWorks from './components/MyWorks.vue';
import Works from './components/Works.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Artists,
    LatestNews,
    Auction,
    MyWorks,
    Works,
  },
};
</script>

<style lang="scss" scoped>
.home {
  // background: url(~@/assets/img/bottom-bg@2x.png) 100% 100% / 400px auto no-repeat;
}
</style>
