<template>
  <div>
    <TopSection/>
    <TokenSection/>
    <WorkListSection />
  </div>
</template>

<script>
import TopSection from './components/TopSection.vue';
import TokenSection from './components/TokenSection.vue';
import WorkListSection from './components/WorkListSection.vue';

export default {
  components: {
    TopSection,
    TokenSection,
    WorkListSection,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.work-list {

}
</style>
