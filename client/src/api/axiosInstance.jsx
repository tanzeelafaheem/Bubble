import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bubble-server-leky.onrender.com/api',
});

export default axiosInstance
