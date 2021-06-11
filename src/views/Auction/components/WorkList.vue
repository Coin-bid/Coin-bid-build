<template>
  <div class="">
    <div class="condition-bar">
      <div class="checkbox-group">
         <b-checkbox class="checkbox" v-model="checked1">我拥有的作品</b-checkbox>
        <b-checkbox  class="checkbox"  v-model="checked2">备选项</b-checkbox>
      </div>

      <div class="sort-group">
         <b-button  class="sort-btn" variant="outline-primary">
           上架时间
           <span class="sorter">

           </span>
          </b-button>
          <b-button class="sort-btn" variant="outline-primary">
            价格
             <span class="sorter">

           </span>
          </b-button>
      </div>
    </div>

   <b-row
    class="work-list-wrapper"
    :no-gutters="true"
   >
      <b-col
        v-for="(item, idx) in list"
        :key="idx"
        span="12"
        md="6"
        xl="4"
      >
        <WorkCard class="work-card"  :img="item.img" :id="item.id"/>
      </b-col>
    </b-row>
    <div class="pagination-wrapper">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :hide-goto-end-buttons="true"
        class="pagination"
        aria-controls="my-table"
      >
        <!-- <template #first-text>
          <span>
            <img src="../img/pre-page@2x.png" alt="">
          </span>
        </template> -->
        <template #prev-text>
          <span class="pre-btn">
            <img src="../img/pre-page@2x.png" alt="">
          </span>
        </template>
        <template #next-text>
          <span  class="next-btn">
            <img src="../img/next-page@2x.png" alt="">
          </span>
        </template>
        <!-- <template #last-text>
          <span>
            <img src="../img/next-page@2x.png" alt="">
          </span>
        </template> -->
      </b-pagination>
    </div>

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

      perPage: 3,
      currentPage: 1,
      rows: 10,
      checked1: '',
      checked2: '',

      list: [
        {
          id: 1,
          img: require('@/assets/img/art-work-1@2x.png'),
        },
        {
          id: 2,
          img: require('@/assets/img/art-work-2@2x.png'),
        },
        {
          id: 3,
          img: require('@/assets/img/art-work-3@2x.png'),
        },
        {
          id: 4,
          img: require('@/assets/img/art-work-1@2x.png'),
        },
        {
          id: 5,
          img: require('@/assets/img/art-work-2@2x.png'),
        },

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.condition-bar {
  display: flex;
  justify-content: flex-end;

  .checkbox-group {
    display: flex;
    align-items: center;
    margin-right: 20px;

    .checkbox {
      &:nth-child(2) {
        margin-left: 20px;
      }
    }

  }

  .sort-group {
    .sort-btn {

      background: #fff;
      color: #00D750;
      border-color: #DDDDDD;

      &:nth-child(2) {
        margin-left: 20px;
      }
    }

    .sorter {
      width: 20px;
      height: 12px;
      display: inline-block;
      background:
        url(../img/sort-top@2x.png) center top / 10px auto no-repeat,
        url(../img/sort-bottom@2x.png) center bottom / 10px auto no-repeat;
    }
  }
}

.work-list-wrapper {
  margin-top: 30px;
  .work-card {
    margin-bottom: 20px;
  }
}

.pagination {

  ::v-deep .page-item {
   margin: 0 5px;
   .page-link {
      width: 38px;
      height: 38px;
      color: #ABABAB;
      // border-radius: 19px;
      background: #FFFFFF;
      box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
      border-radius: 50%;
      border: 0;
      font-weight: bold;
    }

     &.active {
      .page-link {
        color: #fff;
        background: #00D750;
      }
    }

    &:first-child {
      margin-right: 25px;
    }
    &:last-child {
      margin-left: 25px;
    }
  }

  .pre-btn,
  .next-btn {
    width: 38px;
    height: 38px;
    background: #FFFFFF;
    box-shadow: 0px 3px 10px 0px rgba(119, 119, 119, 0.1);
    border-radius: 50%;

    img {
      width: 13px;
    }
  }
}

.pagination-wrapper {
  margin-top: 28px;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 992px) {
  .condition-bar {

  }
}

@media (max-width: 540px) {

  .condition-bar {
    flex-direction: column;
    align-items: start;
  }

  .sort-btn {
    margin-top: 24px;
  }
}
</style>
