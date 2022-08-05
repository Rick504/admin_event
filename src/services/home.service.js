import { http } from './config/http.config'

export default {
  usersDetailsGet: () => {
    return http.get('users');
  }
};
