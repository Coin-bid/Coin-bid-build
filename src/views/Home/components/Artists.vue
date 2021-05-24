<template>
  <div class="artists">
    <b-container fluid="lg" class="op-bar">
      <h2 class="title">
        What artists like you <br>are saying about Cion Bid
      </h2>
    </b-container>
    <b-container fluid="lg" class="card-content">
      <div class="info-wrapper">
        <div class="img-wrapper">
          <img src="~@/assets/img/artist-pic@2x.png" alt="">
        </div>
        <div class="intro">
          <h4 class="name">
            Mr. Alain Cartwright
          </h4>
          <div class="desc">
            Mr. Alain Cartwright graduated from Cambridge withan MBA degree from Stanford. Mr.Cartwright is an accomplished executive with strongdomestic and international experience in innovation, operations, P&L for product development and marketing involving both start-up and growth organizations.
            <br>
            Mr. Cartwright is responsible for overall technology vision,product development, and customer delivery for 100+ person marketing company servicing a large number of advertisers and publishers. Lead all aspects of architecture, software, and product development,
            including all make vs. business analysis, investment rationalization, and delivery schedule for high transaction applications.Review all development projects to ensure reliability, effectiveness, and ROI. Managed department of 25-30 employees with 6 direct
            reports: 2 Directors of Development,  the Head of QA, Head of Network, Head of Desktop, and Lead Project Manager.
            <br>
            Mr. Cartwright has been worked in Deloitte, Accenture, and IBM with different technical and managing roles.
          </div>
        </div>
      </div>
      <div class="card-list">
        <ArtistCard
          class="artist-card"
          :active="id === 1"
          name="Alain Cartwright"
          :avatar="require('@/assets/img/artist-header-1@2x.png')"
          intro="Managing and MBA degree"
          @click="onClick(1)"
        />
        <ArtistCard
          class="artist-card"
          :active="id === 2"
          name="Matthew Chapman"
          :avatar="require('@/assets/img/artist-header-2@2x.png')"
          intro="Managing and bachelor's degree"
          @click="onClick(2)"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import ArtistCard from './ArtistCard.vue';

export default {
  components: {
    ArtistCard,
  },

  data() {
    return {
      id: 1,
    }
  },

  methods: {
    onClick(id) {
      // console.log(id)
      this.id = id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.artists {
  margin-bottom: 160px;
}

.title {
  margin: 0;
  height: 155px;
  font-size:36px;
  font-weight: bold;
  color: #000000;
  line-height: 45px;
  // width: 447px;
  background: url(~@/assets/img/quota_bg@2x.png) left top / 155px auto no-repeat;
}

.card-content {
  display: flex;
}

.info-wrapper {
  display: flex;
}

.img-wrapper {
  margin-right: 30px;
  img {
    width: 300px;
  }
}

.intro {
  margin-top: 10px;
  color: #666666;
  font-size: 12px;
  width: 494px;
  line-height: 18px;
  white-space: break-spaces;
  & .name {
    color: #000000;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 15px;
  }

  & .desc {
    white-space: break-spaces;
  }

}

.card-list {
  margin-left: 76px;
}

@media (max-width: 992px) {

  .info-wrapper {
    flex-direction: column;
  }

  .card-content  {
    flex-direction: column;
  }

  .intro {
    margin-top: 24px;
    width: 100%;
  }

  .card-list {
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
  }
}
</style>
