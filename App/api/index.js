import axios from 'axios';

export const appAxios = axios.create({
  baseURL: 'http://covid.page.kg/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
