/* eslint-disable no-param-reassign */
import { coinBidContract, USDTContract, provider } from '@/eth/ethereum';

const isMetamask = !!window.ethereum;

const user = {
  // namespaced: true,
  state: {
    address: '',
    chainId: '',
    isMetamask,
    loaded: !isMetamask,
  },

  mutations: {
    UPDATE_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    RESET_STATE: (state) => {
      Object.assign(state, {
        address: '',
        chainId: '',
      });
    },
  },

  actions: {
    async handleAccountsChanged({ commit, dispatch, state }, accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== state.address) {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        commit('UPDATE_STATE', {
          address: accounts[0],
          chainId,
          loaded: true,
        });
        dispatch('getBalances');
      }
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

    async getBalances({ commit, state }) {
      // console.log(coinBidContract, this.user.address)
      const [ethBalance, usdtBalance, cbdBalance ] = await Promise.all([
        provider.getBalance(state.address),
        USDTContract.balanceOf(state.address),
        coinBidContract.balanceOf(state.address),
        // miningContract.earned(this.user.address),
        // miningContract.dailyEarning(this.user.address),
      ]);
      // const earnedBalance = await miningContract.earned(this.user.address);
      // const ethBalance = await provider.getBalance(this.user.address);
      // const cbdBalance = await coinBidContract.balanceOf(this.user.address);
      // const usdtBalance = await USDTContract.balanceOf(this.user.address);

      // this.ethBalance = ethBalance;
      // this.usdtBalance = usdtBalance;
      // this.cbdBalance = cbdBalance;
      // this.earnedBalance = earnedBalance;
      // this.dailyEarning = dailyEarning;

      commit('UPDATE_STATE', {
        ethBalance,
        usdtBalance,
        cbdBalance,
        // earnedBalance,
        // dailyEarning,
      })
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
