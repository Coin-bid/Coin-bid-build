<template>
<div class="works">
   <b-container fluid="lg" >
    <h2>My owned creations</h2>

    <b-row class="list">
      <b-col
      v-for="(item, idx) in list"
      :key="idx">
      <WorkCard class="card" span="4"  :img="item.img"/>
      </b-col>
    </b-row>
    <div class="more-wrapper">
      <b-button variant="primary">View More</b-button>
    </div>
  </b-container>
</div>

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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.works {
  padding-top: 150px;
  padding-bottom: 198px;
  background: url(~@/assets/img/works-bg@2x.png) center top / auto 867px no-repeat;
}
h2 {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
}
.list {
  margin-bottom: 54px
}

.more-wrapper {
  text-align: center;
}

@media (max-width: 992px) {
  .list {
    .card {
      margin-bottom: 24px;
    }
  }
}
</style>
