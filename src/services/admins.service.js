import { httpClient } from './config/http.config'

export default {

    adminDetails: async (params) => {
        try { return await httpClient.get(`admins/${params}`) }
        catch (err) { return await Promise.reject(err) }
    },

    adminsDetails: async () => {
        try { return await httpClient.get(`admins`) }
        catch (err) { return await Promise.reject(err) }
    },
}
