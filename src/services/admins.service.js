import { httpClient } from './config/http.config'

export default {

    adminDetail: async (params) => {
        try { return await httpClient.get(`admins/${params}`) }
        catch (err) { return await Promise.reject(err) }
    },

    adminsDetails: async () => {
        try { return await httpClient.get(`admins`) }
        catch (err) { return await Promise.reject(err) }
    },

    adminsEdit: async (data) => {
        try { return await httpClient.put(`admins/${data.id}`, data) }
        catch (err) { return await Promise.reject(err) }
    }
}
