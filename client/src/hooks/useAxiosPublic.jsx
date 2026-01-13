// hooks/useAxiosPublic.js
import axios from 'axios';

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`, // Your backend URL
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false, 
  });

  return axiosPublic;
};

export default useAxiosPublic;
