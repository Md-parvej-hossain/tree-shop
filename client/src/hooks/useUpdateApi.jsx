import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosPublic from './useAxiosPublic';

const useUpdateApi = (url, options = {}) => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data, method = 'patch' }) => {
      const res = await axiosPublic[method](`${url}/${id}`, data);
      return res.data;
    },

    onSuccess: data => {
      toast.success(options.successMessage || 'Data updated successfully');

      if (options.invalidateKey) {
        queryClient.invalidateQueries({
          queryKey: [options.invalidateKey],
        });
      }

      options.onSuccess?.(data);
    },

    onError: error => {
      toast.error(error.response?.data?.message || 'Update failed');
      options.onError?.(error);
    },
  });
};

export default useUpdateApi;
