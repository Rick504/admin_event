import usersService from '@/services/users.service'
import adminsService from '@/services/admins.service'

const usersModule = {
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
    async actionAdminDetails({ commit }, userId) {
      try {
        const data = await adminsService.adminDetails(userId)
        commit('SET_ADMIN', data.data)
      } catch {
        (error) => Promise.reject(error)
      }
    },
    async actionUsersDetail({ commit }) {
      try {
        const data = await usersService.usersDetails()
        commit('SET_USERS', data.data)
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR', true)
      }
    },
    async actionUserInsert({ commit }, userData) {
      let alertMessage = "Usuário adicionado a lista com sucesso !!"

      try {
        await usersService.userInsert(userData)
        const data = await usersService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT', alertMessage, 'SUCCESS')
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR', true)
      }
    },
    async actionUserDelete({ commit }, userId) {
      let alertMessage = "Usuário deletado com sucesso !!"

      try {
        await usersService.userDelete(userId)
        const data = await usersService.usersDetails()

        commit('SET_USERS', data.data)
        commit('CALL_ALERT', alertMessage, 'SUCCESS')
      } catch {
        (error) => Promise.reject(error)
        commit('CALL_ALERT_ERROR', true)
      }
    },
    async actionUserEdit({ commit }, userData) {
      let alertMessage = "Usuário editado com sucesso !!"

      try {
        await usersService.userEdit(userData)
        const data = await usersService.usersDetails()

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

  export default usersModule
