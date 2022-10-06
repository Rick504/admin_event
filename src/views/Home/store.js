import homeService from '@/services/home.service'

const homePageModule = {
  state: {
    alert: {
      active: false,
      menssage: null,
      type: null
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
    CALL_ALERT(state, alertMessage, type) {
      state.alert.active = true
      state.alert.menssage = alertMessage
      state.type = type
    },
    CALL_ALERT_ERROR(state, active) {
      state.alertError = active
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
        commit('CALL_ALERT_ERROR', true)
      }
    },
    async httpUserInsert({ commit }, userData) {
      let alertMessage = "Usuário adicionado a lista com sucesso !!"

      try {
        await homeService.userInsert(userData)
        const data = await homeService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT', alertMessage, 'SUCCESS')
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR', true)
      }
    },
    async httpUserDelete({ commit }, userId) {
      let alertMessage = "Usuário deletado com sucesso !!"

      try {
        await homeService.userDelete(userId)
        const data = await homeService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT', alertMessage, 'SUCCESS')
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR', true)
      }
    },
    async httpUserEdit({ commit }, userData) {
      let alertMessage = "Usuário editado com sucesso !!"

      try {
        await homeService.userEdit(userData)
        const data = await homeService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT', alertMessage, 'SUCCESS')
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR', true)
      }
    }
  },
  getters: {}
};

  export default homePageModule
