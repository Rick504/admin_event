import homeService from '@/services/home.service'

const homePageModule = {
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    async httpUsersDetailGet({ commit }) {
      try {
        const data = await homeService.usersDetailsGet();
        commit('SET_USERS', data.data);
      } catch {
        (error) => Promise.reject(error);
      }
    }
  },
  getters: {}
};

  export default homePageModule
