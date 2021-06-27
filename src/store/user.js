/* eslint-disable no-param-reassign */
// import {
//   login,
//   logout,
//   getUser,
// } from '@/api/login';
// import { removeToken, setToken } from '@/common/auth';
// import Cookies from 'js-cookie';

const user = {
  // namespaced: true,
  state: {
    address: '',
    chainId: '',
    isMetamask: false,
  },

  mutations: {
    UPDATE_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    RESET_STATE: (state) => {
      Object.assign(state, {
        address: '',
        chainId: '',
        isMetamask: false,
      });
    },
  },

  actions: {
    async handleAccountsChanged({ commit }, accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== this.address) {

        console.log(accounts)
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        commit('UPDATE_STATE', {
          address: accounts[0],
          chainId,
        });
        // Do any other work!
      }
      console.log(this);
    },

    unlockByMetaMask({ dispatch }) {
      if (typeof window.ethereum === 'undefined') {
        throw Error('MetaMask is not installed!');
      }

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          dispatch('handleAccountsChanged', accounts);
        })
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
    },
    // 获取用户信息
    // async GetUserInfo({ state, commit }) {
    //   const response = await getUser(state.token);
    //   commit('SET_IS_LOGIN', true);
    //   commit('SET_ACCOUNT', response.name);
    //   commit('SET_NAME', response.name);
    //   commit('SET_UID', response.id);
    //   response.resources = [];
    //   return response;
    // },

    // // 登出
    // async LogOut({ commit }) {
    //   await logout();
    //   commit('RESET_STATE');
    //   window.location.href = '/login';
    // },

    // LoginByUsername({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     login({
    //       username: payload.username,
    //       password: payload.password,
    //       // csrfmiddlewaretoken: Cookies.get('csrftoken'),
    //     })
    //       .then((response) => {
    //         commit('SET_IS_LOGIN', true);
    //         commit('SET_ACCOUNT', payload.username);
    //         commit('SET_NAME', payload.username);
    //         resolve(response);
    //         return null;
    //       })
    //       .catch((error) => {
    //         reject(error);
    //         return null;
    //       });
    //   });
    // },
  },
};

export default user;
