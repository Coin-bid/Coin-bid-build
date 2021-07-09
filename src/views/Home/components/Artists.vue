<i18n>
{
  "en": {
    "saying": "What artists like you <br>are saying about Cion Bid",
    "viewMore": "View More",
    "name1": "Mr. Alain Cartwright",
    "name1content1": "Mr. Alain Cartwright graduated from Cambridge withan MBA degree from Stanford. Mr.Cartwright is an accomplished executive with strongdomestic and international experience in innovation, operations, P&L for product development and marketing involving both start-up and growth organizations.",
    "name1content2": "Mr. Cartwright is responsible for overall technology vision,product development, and customer delivery for 100+ person marketing company servicing a large number of advertisers and publishers. Lead all aspects of architecture, software, and product development, including all make vs. business analysis, investment rationalization, and delivery schedule for high transaction applications.Review all development projects to ensure reliability, effectiveness, and ROI. Managed department of 25-30 employees with 6 direct reports: 2 Directors of Development,  the Head of QA, Head of Network, Head of Desktop, and Lead Project Manager.",
    "name1content3": "Mr. Cartwright has been worked in Deloitte, Accenture, and IBM with different technical and managing roles.",
    "name2": "Mr. Matthew Chapman",
    "name2content1": "Mr. Matthew Chapman has remarkable leadership experience managing multiple cross-functional teams in the IT industry, especially in the Blockchain field. Mr. Matthew holds a bachelor's degree from Imperial College London and worked at IBM as a Blochcain Architect.",
    "name2content2": "Mr. Matthew has in-depth knowledge of information systems technology. Immense ability to work through complex problems ability to explain and receive input on technical issues.",
    "name2content3": "Mr. Chapman is applauded as a skilled international technology leader, being able to direct large geographically disperse teams that work together seamlessly.",
    "name2content4": "Visionary with a record of achievement in building and aligning technology organizations with business objectives to achieve dramatic Results.",
    "cardName1": "Alain Cartwright",
    "cardIntro1": "Managing and MBA degree",
    "cardName2": "Matthew Chapman",
    "cardIntro2": "Managing and bachelor's degree"
  },
  "zh": {
    "saying": "像您这样的艺术家对 Cion Bid 的评价是什么",
    "viewMore": "查看更多",
    "name1": "Mr.阿兰卡特赖特",
    "name1content1": "Alain Cartwright先生，毕业于剑桥大学，获得斯坦福大学的 MBA 学位。 Cartwright 先生是一位成就卓著的高管，在涉及初创公司和成长型组织的产品开发和营销的创新、运营、损益方面拥有丰富的国内和国际经验。",
    "name1content2": "Mr. Cartwright 负责为 100 多人为大量广告商和发布商提供服务的营销公司的整体技术愿景、产品开发和客户交付。领导架构、软件和产品开发的所有方面，包括所有制造与业务分析、投资合理化和高交易应用程序的交付时间表。审查所有开发项目以确保可靠性、有效性和投资回报率。管理的部门有 25-30 名员工，有 6 名直接下属：2 名开发总监、QA 负责人、网络负责人、桌面负责人和首席项目经理。",
    "name1content3": "Mr. Cartwright 曾在德勤、埃森哲和 IBM 担任过不同的技术和管理角色。",
    "name2": "Mr.马修查普曼",
    "name2content1": " Matthew Chapman先生，在管理 IT 行业的多个跨职能团队方面拥有卓越的领导经验，尤其是在区块链领域。 Matthew 先生拥有伦敦帝国理工学院的学士学位，曾在 IBM 担任 Blochcain 架构师。",
    "name2content2": "Mr. Matthew 对信息系统技术有深入的了解。强大的解决复杂问题的能力，能够解释和接收技术问题的意见。",
    "name2content3": "Mr.查普曼被誉为熟练的国际技术领导者，能够指导分散在不同地区的大型团队无缝协作。",
    "name2content4": "富有远见，在建立技术组织并使其与业务目标保持一致以取得显著成果方面取得了成就。",
    "cardName1": "阿兰卡特赖特",
    "cardIntro1": "管理及工商管理硕士学位",
    "cardName2": "马修查普曼",
    "cardIntro2": "管理与学士学位"
  }
}
</i18n>

<template>
  <div class="artists">
    <b-container fluid="lg" class="op-bar">
      <h2 class="title" v-html="$t('saying')">
        <!-- What artists like you <br>are saying about Cion Bid -->
      </h2>
    </b-container>
    <b-container fluid="lg" class="card-content">
      <div class="info-wrapper"
        v-if="id === 1"
      >
        <div class="img-wrapper">
          <img src="~@/assets/img/artist-pic@2x.png" alt="">
        </div>
        <div class="intro">
          <h4 class="name">{{$t("name1")}}</h4>
          <div class="desc">
          <p>{{$t('name1content1')}}</p>
          <p>{{$t('name1content2')}}</p>
          <p>{{$t('name1content3')}}</p>
          </div>
        </div>
      </div>

      <div class="info-wrapper"
        v-if="id === 2"
      >
        <div class="img-wrapper">
          <img src="~@/assets/img/artist-pic@2x.png" alt="">
        </div>
        <div class="intro">
          <h4 class="name">{{$t("name2")}}</h4>
          <div class="desc">
          <p>{{$t('name2content1')}}</p>
          <p>{{$t('name2content2')}}</p>
          <p>{{$t('name2content3')}}</p>
          <p>{{$t('name2content4')}}</p>
          </div>
        </div>
      </div>
      <div class="card-list">
        <ArtistCard
          class="artist-card"
          :active="id === 1"
          :name="$t('cardName1')"
          :avatar="require('@/assets/img/artist-header-1@2x.png')"
          :intro="$t('cardIntro1')"
          @click="onClick(1)"
        />
        <ArtistCard
          class="artist-card"
          :active="id === 2"
          :name="$t('cardName2')"
          :avatar="require('@/assets/img/artist-header-2@2x.png')"
          :intro="$t('cardIntro2')"
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
    p {
      margin: 0;
      // text-indent: 2em;
    }
  }

}

.card-list {
  margin-left: 76px;
}

@media (max-width: 992px) {

  .info-wrapper {
    flex-direction: column;
    .img-wrapper {
      margin-right: 0;
    }
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
