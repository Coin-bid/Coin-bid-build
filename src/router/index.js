import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Layout,
    // redirect: '/home',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
      },
      {
        path: '/auction',
        name: 'Auction',
        component: () => import('@/views/Auction'),
      },

      {
        path: '/auction/detail/:id',
        name: 'AuctionDetail',
        component: () => import('@/views/AuctionDetail'),
      },

      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/Mine'),
      },

      {
        path: '/collection/create',
        name: 'CollectionCreate',
        component: () => import('@/views/CollectionCreate'),
      },
    ],
  },
  // ...login,
];

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior() {
    const scrolls = document.getElementsByClassName('layout-content-scroll');
    if (scrolls.length > 0) scrolls[0].scrollTop = 0;
  },
});

// router.beforeEach((to, from, next) => {
//   // eslint-disable-next-line
//   if (to.meta.excludeLogin || __g_store__.state.user.isLogin) {
//     next();
//   } else {
//     next({
//       path: '/client/login',
//       replace: true,
//     });
//   }
// });

export default router;
