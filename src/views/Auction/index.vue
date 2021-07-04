<template>
  <div class="auction">
    <b-container fluid="lg" class="my-works">
      <SiderMenu class="sider-menu"/>
      <router-view :key="$route.path"></router-view>
      <!-- <WorkList class="work-list"/> -->
    </b-container>
  </div>
</template>

<script>
import SiderMenu from './components/SiderMenu.vue';
// import WorkList from './components/WorkList.vue';

export default {
  components: {
    SiderMenu,
    // WorkList,
  },
};
</script>

<style lang="scss" scoped>
.my-works {
  display: flex;

}

.sider-menu {
  flex-grow: 0;
  flex-shrink: 0;
}



@media (max-width: 992px) {
  .work-list {
    margin-left: 24px;
  }
}

@media (max-width: 540px) {
  .my-works {
    flex-direction: column;
  }

  .work-list {
    margin-top: 0;
    padding-top: 0;
    margin-left: 0;
  }
}

</style>
