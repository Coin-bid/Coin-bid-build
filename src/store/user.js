/* eslint-disable no-param-reassign */
import {
  login,
  logout,
  getUser,
} from '@/api/login';
// import { removeToken, setToken } from '@/common/auth';
// import Cookies from 'js-cookie';

const user = {
  // namespaced: true,
  state: {
    isLogin: false,
    name: '',
    account: '',
    uid: '',
    permissions: '',
  },

  mutations: {
    SET_IS_LOGIN(state, isLogin) {
      state.isLogin = isLogin;
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    // SET_USER_ROLE: (state, roleId) => {
    //   state.roleId = roleId;
    // },

    // SET_IS_SUPER: (state, isSuper) => {
    //   state.isSuper = isSuper;
    // },

    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },

    UPDATE_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    RESET_STATE: (state) => {
      Object.assign(state, {
        isLogin: false,
        uid: '',
        name: '',
        account: '',
        permissions: '',
      });
    },
  },

  actions: {
    // 获取用户信息
    async GetUserInfo({ state, commit }) {
      const response = await getUser(state.token);
      commit('SET_IS_LOGIN', true);
      commit('SET_ACCOUNT', response.name);
      commit('SET_NAME', response.name);
      commit('SET_UID', response.id);
      response.resources = [];
      return response;
    },

    // 登出
    async LogOut({ commit }) {
      await logout();
      commit('RESET_STATE');
      window.location.href = '/login';
    },

    LoginByUsername({ commit }, payload) {
      return new Promise((resolve, reject) => {
        login({
          username: payload.username,
          password: payload.password,
          // csrfmiddlewaretoken: Cookies.get('csrftoken'),
        })
          .then((response) => {
            commit('SET_IS_LOGIN', true);
            commit('SET_ACCOUNT', payload.username);
            commit('SET_NAME', payload.username);
            resolve(response);
            return null;
          })
          .catch((error) => {
            reject(error);
            return null;
          });
      });
    },
  },
};

export default user;
