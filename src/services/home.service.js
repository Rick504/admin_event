import { httpClient } from './config/http.config'

export default {

    adminDetails: async (params) => {
    try
        { return await
            httpClient.get(`admins/${params}`) }
    catch (err)
        { return await
            Promise.reject(err) }
    },

   usersDetails: async () => {
    try
        { return await
            httpClient.get('users') }
    catch (err)
        { return await
            Promise.reject(err) }
  },

  userInsert: async (data) => {
    try
        { return await
            httpClient.post('users', data) }
    catch (err)
        { return await
            Promise.reject(err) }
  },

  userDelete: async (params) => {
    try
        { return await
            httpClient.delete(`users/${params}`,) }
    catch (err)
        { return await
            Promise.reject(err) }
  },

  userEdit: async (data) => {
    try
        { return await
            httpClient.put(`users/${data.id}`, data) }
    catch (err)
        { return await
            Promise.reject(err) }
  }

}
