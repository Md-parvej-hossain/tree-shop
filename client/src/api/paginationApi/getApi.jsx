// api/plantesApi.js
import axios from 'axios';

export const getPlantes = async (page = 1, limit = 6) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/plantes?page=${page}&limit=${limit}`
  );
  return res.data;
};
