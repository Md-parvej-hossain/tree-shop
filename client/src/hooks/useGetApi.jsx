import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosPublic from './useAxiosPublic';

const useGetApi = (queryKey, url, options = {}) => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await axiosPublic.get(url);
      return res.data;
    },

    enabled: options.enabled ?? true, // optional control
    staleTime: options.staleTime || 0,

    onSuccess: data => {
      if (options.successMessage) {
        toast.success(options.successMessage);
      }
      options.onSuccess?.(data);
    },

    onError: error => {
      toast.error(error.response?.data?.message || 'Failed to load data');
      options.onError?.(error);
    },
  });
};

export default useGetApi;
