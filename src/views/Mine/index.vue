<template>
  <div>
    <TopSection
       :address="user.address"
    />
    <TokenSection
      :ethBalance="ethBalance"
      :usdtBalance="usdtBalance"
      :cbdBalance="cbdBalance"
      :earnedBalance="earnedBalance"
      :dailyEarning="dailyEarning"
    />
    <CanvasBuy
    />
    <WorkListSection
      :myWorks="myWorks"
      :myOwns="myOwns"
      :myAuctionList="myAuctionList"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import queryQl from '@/common/queryQl';
import { miningContract, coinBidContract, USDTContract, provider } from '@/eth/ethereum';
import TopSection from './components/TopSection.vue';
import TokenSection from './components/TokenSection.vue';
import CanvasBuy from './components/CanvasBuy.vue';
import WorkListSection from './components/WorkListSection.vue';

// console.log()
console.log('miningContract', miningContract)
console.log('coinBidContract', coinBidContract)

miningContract.functions.owner();
export default {
  components: {
    TopSection,
    TokenSection,
    CanvasBuy,
    WorkListSection,
  },
  data() {
    return {
      ethBalance: 0,
      usdtBalance: 0,
      cbdBalance: 0,
      earnedBalance: 0,
      dailyEarning: 0,

      myWorks: [],
      myOwns: [],
      myAuctionList: [],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },

  created() {
    console.log(this.user)
    this.getBalances();
    this.getMyOwns();
    this.getMines();
    this.getAuctions();
  },

  methods: {
    async getBalances() {
      // console.log(coinBidContract, this.user.address)
      const [ethBalance, usdtBalance, cbdBalance, earnedBalance, dailyEarning] = await Promise.all([
        provider.getBalance(this.user.address),
        USDTContract.balanceOf(this.user.address),
        coinBidContract.balanceOf(this.user.address),
        miningContract.earned(this.user.address),
        miningContract.dailyEarning(this.user.address),
      ]);
      // const earnedBalance = await miningContract.earned(this.user.address);
      // const ethBalance = await provider.getBalance(this.user.address);
      // const cbdBalance = await coinBidContract.balanceOf(this.user.address);
      // const usdtBalance = await USDTContract.balanceOf(this.user.address);

      this.ethBalance = ethBalance;
      this.usdtBalance = usdtBalance;
      this.cbdBalance = cbdBalance;
      this.earnedBalance = earnedBalance;
      this.dailyEarning = dailyEarning;
      // console.log(earnedBalance)
      // console.log(ethBalance)
      // console.log(cbdBalance)
      // console.log(usdtBalance)
      // console.log('dailyEarning', dailyEarning)
    },

    async getMyOwns() {
      const myOwns = await miningContract.getMyOwnedCreations(this.user.address);
      console.log('myOwns', myOwns);
      this.myOwns = myOwns;
    },

    async getMines() {
      const { data } = await queryQl(`{
        auctionEntities(first: 100, where:{creator: "${this.user.address}"}) {
          id
          nftId
          creator
          seller
          lastPrice
          endAt
          startedAt
          lastBidder
          tokenURI
          ended
        }
      }`);

      const { auctionEntities } = data.data;
      console.log('getMines', data.data);
      this.myWorks = auctionEntities;
    },

    async getAuctions() {
      const { data } = await queryQl(`{
        auctionEntities(first: 100, where:{lastBidder: "${this.user.address}", ended: false}) {
          id
          nftId
          creator
          seller
          lastPrice
          endAt
          startedAt
          lastBidder
          tokenURI
          ended
        }
      }`);

      console.log('getAuctions', data.data);
      const { auctionEntities } = data.data;
      this.myAuctionList = auctionEntities;
    },
  }
};
</script>

<style lang="scss" scoped>
.work-list {

}
</style>

