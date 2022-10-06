import { httpClient } from './config/http.config'

export default {

    adminDetails: async (params) => {
        try { return await httpClient.get(`admins/${params}`) }
        catch (err) { return await Promise.reject(err) }
    },
}
