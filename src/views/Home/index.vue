<template>
  <div class="home">
    <Banner/>
    <Auction/>
    <MyWorks/>
    <ArtWorks/>
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
import ArtWorks from './components/ArtWorks.vue';
import MyWorks from './components/MyWorks.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Artists,
    LatestNews,
    Auction,
    ArtWorks,
    MyWorks,
  },
};
</script>

<style lang="scss" scoped>
.home {
  // background: url(~@/assets/img/bottom-bg@2x.png) 100% 100% / 400px auto no-repeat;
}
</style>
