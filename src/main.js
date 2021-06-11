import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as echarts from 'echarts';
import VueECharts from 'vue-echarts';
import VueCompositionAPI from '@vue/composition-api';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/theme-overrides/index.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component('v-charts', VueECharts);

Vue.config.productionTip = false;

window.__g_store__ = store;
window.__g_router__ = router;

// eslint-disable-next-line no-underscore-dangle
window.__g_root__ = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// __g_root__.$bvToast.toast(`提示`, {
//   title: 'BootstrapVue Toast',
//   autoHideDelay: 5000,
// })
