import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.78:3010',
});

export default api;
