import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  me: async id => get(`/users/${id}`),
  login: async params => post('api/login', params),
  register: async params => post('api/register', params),
  score: async params => get('api/quiz/result', params),
  Latian: async params => get('api/quiz/1', params)
};

export default { endpoint };
