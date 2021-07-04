<template>
  <b-container fluid="lg" >

  <div class="work-list-section">
    <!-- <div class="section-one" v-if="canvasAmount">
      <h2 class="section-title">未铸造的画布
      </h2>
      <div>
         <b-row
          class="work-list"
        >
            <b-col
              v-for="(item, idx) in canvasAmount"
              :key="idx"
              class="work-col"
              span="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <CanvasWorkCard
                class="work-card"
                :item="item"
                @click.native="toCasting(item)"
              />
            </b-col>
          </b-row>

      </div>
    </div> -->

    <div class="section-one">
      <h2  class="section-title">Works I own
        <!-- <span class="more">查看更多 >></span> -->
      </h2>
      <div>
        <b-row
          class="work-list"
        >
          <template v-if="myOwns.length">
            <b-col
              v-for="(item, idx) in myOwns"
              :key="idx"
              class="work-col"
              span="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <WorkCard class="work-card"
                :item="item"
              />
            </b-col>
          </template>
          <b-col v-else class="empty-list">
            No works
          </b-col>
          </b-row>

      </div>
    </div>

    <div class="section-one">
      <h2  class="section-title">My works
        <!-- <span class="more">查看更多 >></span> -->
      </h2>
      <div>
        <b-row
          class="work-list"
        >
          <template v-if="myCreations.length">
            <b-col
              v-for="(item, idx) in myCreations"
              :key="idx"
              class="work-col"
              span="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <WorkCard class="work-card"
                :item="item"
              />
            </b-col>
          </template>
          <b-col v-else class="empty-list">
            No works
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import WorkCard from './WorkCard.vue';
import CanvasWorkCard from './CanvasWorkCard.vue';
import { canvasAuctionContract } from "@/eth/ethereum";


// console.log()
export default {
  props: {
    myOwns: {
      type: Array,
      default: () => [],
    },
    myCreations: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    WorkCard,
    CanvasWorkCard,
  },
  data() {
     return {

       canvasAmount: 0,
       list: [
        {
          img: require('@/assets/img/art-work-1@2x.png'),
        },
        {
          img: require('@/assets/img/art-work-2@2x.png'),
        },
        {
          img: require('@/assets/img/art-work-3@2x.png'),
        },
         {
          img: require('@/assets/img/art-work-1@2x.png'),
        },
      ]
    }
  },

   computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },

  created() {
    this.getCanvasAmount();
  },

  methods: {
    toCasting() {
      this.$router.push('/collection/create')
    },

    async getCanvasAmount() {
      // const res = await canvasAuctionContract.getMyAmout(this.user.address);
      // if (res) {
      //   this.canvasAmount = res.toNumber();
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.work-list-section {
  margin-bottom: 300px;

}
.section-one {
  margin-top: 60px;
}
.work-list {
  margin-left: -10px;
  margin-right: -10px;
}
.work-col {
  padding-left: 10px;
  padding-right: 10px;
}

.empty-list {
  margin-top: 48px;
  margin-bottom: 48px;
  text-align: center;

}

.section-title {
  font-size: 20px;
  line-height: 20px;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 24px;
  font-weight: normal;
  & .more {
    color: #00D750;
    float: right;
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
  }
}


</style>
