import axios from 'axios';

const API_ROOT = 'http://localhost:3001/api';

export const requests = {
  get: (url, secured = false) =>
    axios.get(`${API_ROOT}${url}`).then(response => response.data),
  post: (url, body = null, secured = true) =>
    axios.post(`${API_ROOT}${url}`, body).then(response => response.body),
  patch: (url, body = null, secured = true) =>
    axios.patch(`${API_ROOT}${url}`, body).then(response => response.body),
}