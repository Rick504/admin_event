import { httpClient } from './config/http.config'

export default {
   usersDetails: () => { return httpClient
      .get('users')
      .catch((error) => Promise.reject(error))
  },
  userInsert: (data) => {  return httpClient
      .post('users', data)
      .catch((error) => Promise.reject(error))
  }
};
