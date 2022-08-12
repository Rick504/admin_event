import homeService from '@/services/home.service'

const homePageModule = {
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_USER(state, user) {
      state.users = user
    }
  },
  actions: {
    async httpUsersDetail({ commit }) {
      try {
        const data = await homeService.usersDetails();
        commit('SET_USERS', data.data);
      } catch {
        (error) => Promise.reject(error);
      }
    },
    async httpUserInsert({ commit }, userData) {
      try {
        commit('ADD_USER', userData);
        await homeService.userInsert(userData);

        const data = await homeService.usersDetails();
        commit('SET_USERS', data.data);
      } catch {
        (error) => Promise.reject(error);
      }
    }
  },
  getters: {}
};

  export default homePageModule
