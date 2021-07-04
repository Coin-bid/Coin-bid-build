import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as echarts from 'echarts';
import VueECharts from 'vue-echarts';
import VueCompositionAPI from '@vue/composition-api';
// import Account from '@/eth/Account';

import App from './App.vue';
import router from './router';
import store from './store';
import './filters/toFixed';
import './filters/formatTime';

import '@/styles/theme-overrides/index.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueCompositionAPI);


Vue.component('v-charts', VueECharts);

Vue.config.productionTip = false;

window.__g_store__ = store;
window.__g_router__ = router;
// window.__g_account__ = new Account();
// Vue.prototype.$account = window.__g_account__;

if (window.ethereum) {
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });

  // For now, 'eth_accounts' will continue to always return an array
  window.ethereum
    .request({ method: 'eth_accounts' })
    .then((accounts) => {
      store.dispatch('handleAccountsChanged', accounts);
    })
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });

  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  window.ethereum.on('accountsChanged', (accounts) => {
    store.dispatch('handleAccountsChanged', accounts);
  });

}

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
