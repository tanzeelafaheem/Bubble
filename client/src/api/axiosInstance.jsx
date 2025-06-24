import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bubble-server-uemd.onrender.com',
});

export default axiosInstance
