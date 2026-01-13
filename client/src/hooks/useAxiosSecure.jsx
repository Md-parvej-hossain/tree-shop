// hooks/useAxiosSecure.js
import axios from 'axios';
import useAuth from './useAuth'; // your auth hook for token

const useAxiosSecure = () => {
  const { user, getToken } = useAuth(); // Assume getToken() returns JWT

  const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`, 
    headers: {
      'Content-Type': 'application/json',

    },
    withCredentials: false, 
  });

  // Add token to each request
  axiosSecure.interceptors.request.use(
    async config => {
      const token = await getToken(); // get JWT token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  return axiosSecure;
};

export default useAxiosSecure;
