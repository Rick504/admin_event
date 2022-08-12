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
        await homeService.userInsert(userData);

        const data = await homeService.usersDetails();
        commit('SET_USERS', data.data);
      } catch {
        (error) => Promise.reject(error);
      }
    },
    async httpUserDelete({ commit }, userId) {
      try {
        await homeService.userDelete(userId);

        const data = await homeService.usersDetails();
        commit('SET_USERS', data.data);
      } catch {
        (error) => Promise.reject(error);
      }
    },

    async httpUserEdit({ commit }, userData) {
      try {
        await homeService.userEdit(userData);

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
