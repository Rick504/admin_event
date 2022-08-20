import homeService from '@/services/home.service'

const homePageModule = {
  state: {
    alertSuccess: {
      active: false,
      menssage: null
    },
    alertError: false,
    admin: {},
    users: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ADMIN(state, admin) {
      state.admin = admin;
    },
    CALL_ALERT_SUCCESS(state, menssage) {
      state.alertSuccess.active = true
      state.alertSuccess.menssage = menssage
    },
    CALL_ALERT_ERROR(state) {
      state.alertError = true
    }
  },
  actions: {
    async httpAdminDetails({ commit }, userId) {
      try {
        const data = await homeService.adminDetails(userId)
        commit('SET_ADMIN', data.data)
      } catch {
        (error) => Promise.reject(error)
      }
    },
    async httpUsersDetail({ commit }) {
      try {
        const data = await homeService.usersDetails()
        commit('SET_USERS', data.data)
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR')
      }
    },
    async httpUserInsert({ commit }, userData) {
      let alertText = "Usuário adicionado a lista com sucesso !!"

      try {
        await homeService.userInsert(userData)
        const data = await homeService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT_SUCCESS', alertText)
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR')
      }
    },
    async httpUserDelete({ commit }, userId) {
      let alertText = "Usuário deletado com sucesso !!"

      try {
        await homeService.userDelete(userId)
        const data = await homeService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT_SUCCESS', alertText)
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR')
      }
    },
    async httpUserEdit({ commit }, userData) {
      let alertText = "Usuário editado com sucesso !!"

      try {
        await homeService.userEdit(userData)
        const data = await homeService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT_SUCCESS', alertText)
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR')
      }
    }
  },
  getters: {}
};

  export default homePageModule
