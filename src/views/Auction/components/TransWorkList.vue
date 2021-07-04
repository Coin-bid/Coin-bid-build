<template>
  <div class="work-list">
  <b-overlay :show="loading" rounded="sm">
   <b-row
    class="work-list-wrapper"
    :no-gutters="true"
   >
    <template v-if="!loading && !list.length">
      <b-col class="empty">
        No works
      </b-col>
    </template>
      <b-col
        v-for="(item, idx) in list"
        :key="item.id"
        span="12"
        md="6"
        xl="4"
      >
        <TransWorkCard class="work-card"
          :swap="item.swap"
          :tokenURI="item.tokenURI"
        />
      </b-col>
    </b-row>
    </b-overlay>
    <div class="pagination-wrapper">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :hide-goto-end-buttons="true"
        class="pagination"
        aria-controls="my-table"
        @change="onChange"
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
import { NFTSwapContract } from '@/eth/ethereum';
import TransWorkCard from './TransWorkCard.vue';


console.log(NFTSwapContract);
export default {
  components: {
    TransWorkCard,
  },
  data() {
    return {

      perPage: 12,
      currentPage: 1,
      rows: 10,

      loading: false,
      checked1: '',
      checked2: '',

      list: [],
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      this.loading = true;
      // try {
      const res = await NFTSwapContract.getOrders();

      console.log(res)
      // const [list, total] = res;
      // this.rows = total.toNumber();

      this.list = res.map((item, idx) => {
        return {
          ...item,
          id: `${this.currentPage}_${idx}`,
        }
      });;

      // console.log(list, total);
      // } catch (error) {
      //   console.error(error);
      // }
      this.loading = false;
      this.$forceUpdate();

    },
    onChange(page) {
      this.currentPage = page;
      this.getList();
    }
  }
};
</script>

<style lang="scss" scoped>

.work-list {
  margin-left: 105px;
  flex-grow: 1;
  padding-top: 40px;
  padding-bottom: 40px;
}

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

  .empty {
    text-align: center;
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
