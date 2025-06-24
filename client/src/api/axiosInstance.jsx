import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bubble-server-bcp9.onrender.com',
});

export default axiosInstance
