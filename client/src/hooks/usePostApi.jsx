import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const usePostApi = (url, options = {}) => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async userData => {
      const res = await axiosPublic.post(url, userData);
      return res.data;
    },

    onSuccess: data => {
      toast.success(options.successMessage || 'Data saved successfully');

      // Optional refetch
      if (options.invalidateKey) {
        queryClient.invalidateQueries({
          queryKey: [options.invalidateKey],
        });
      }

      options.onSuccess?.(data);
    },

    onError: error => {
      toast.error(error.response?.data?.message || 'Something went wrong');
      options.onError?.(error);
    },
  });
};

export default usePostApi;
