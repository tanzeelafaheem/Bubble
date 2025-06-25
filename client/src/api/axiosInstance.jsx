import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bubble-server-bigi.onrender.com/api',
});

export default axiosInstance
