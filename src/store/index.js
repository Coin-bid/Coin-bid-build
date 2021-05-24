import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import config from '@/config';
import user from './user';
import enums from './enums';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: `vuex_${config.storeVersion}`,
      paths: ['user.isLogin'],
    }),
  ],
  modules: {
    user,
    enums,
  },
  state: {

  },
  getters,
  mutations: {

  },
  actions: {
    showComingSoon() {
      __g_root__.$bvToast.toast('Coming soon...', {
        title: 'Notice',
        // toaster: 'b-toaster-top-center',
        autoHideDelay: 5000,
      });
    },
  },

});

// import app from './app';
// import user from './user';
// import station from './station';
// import permission from './permission';
// import tagsView from './tagsView';
// import enums from './enums';
// import settings from './settings';
// import getters from './getters';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   plugins: [
//     createPersistedState({
//       storage: window.localStorage,
//       key: `vuex_${config.storeVersion}`,
//       paths: ['user.isLogin', 'station.selectStation'],
//     }),
//   ],
//   modules: {
//     app,
//     user,
//     station,
//     permission,
//     enums,
//     tagsView,
//     settings,
//   },
//   getters,
//   strict: false,
// });
