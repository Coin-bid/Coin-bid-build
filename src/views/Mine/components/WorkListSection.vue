<template>
  <b-container fluid="lg" >

  <div class="work-list-section">
    <div class="section-one">
      <h2 class="section-title">未铸造的封面

        <span class="more">查看更多 >></span>
      </h2>
      <div>
         <b-row
          class="work-list"
        >
            <b-col
              v-for="(item, idx) in list"
              :key="idx"
              class="work-col"
              span="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <WorkCard
                class="work-card"
                :img="item.img"
                @click.native="toCasting(item)"
              />
            </b-col>
          </b-row>

      </div>
    </div>

      <div class="section-one">
      <h2  class="section-title">我拥有的作品
        <span class="more">查看更多 >></span>

      </h2>
      <div>
        <b-row
          class="work-list"
        >
            <b-col
              v-for="(item, idx) in list"
              :key="idx"
              class="work-col"
              span="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <WorkCard class="work-card"  :img="item.img"/>
            </b-col>
          </b-row>

      </div>
    </div>

    <div class="section-one">
      <h2  class="section-title">我创作的作品
        <span class="more">查看更多 >></span>

      </h2>
      <div>
        <b-row
          class="work-list"
        >
            <b-col
              v-for="(item, idx) in list"
              :key="idx"
              class="work-col"
              span="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <WorkCard class="work-card"  :img="item.img"/>
            </b-col>
          </b-row>

      </div>
    </div>
  </div>
  </b-container>
</template>

<script>
import WorkCard from './WorkCard.vue';

export default {
  components: {
    WorkCard,
  },
  data() {
     return {
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

  methods: {
    toCasting() {
      this.$router.push('/collection/create')
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
