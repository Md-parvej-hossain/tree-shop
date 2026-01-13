import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosPublic from './useAxiosPublic';

const useDeleteApi = (url, options = {}) => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async id => {
      const res = await axiosPublic.delete(`${url}/${id}`);
      return res.data;
    },

    onSuccess: data => {
      toast.success(options.successMessage || 'Data deleted successfully');

      if (options.invalidateKey) {
        queryClient.invalidateQueries({
          queryKey: [options.invalidateKey],
        });
      }

      options.onSuccess?.(data);
    },

    onError: error => {
      toast.error(error.response?.data?.message || 'Delete failed');
      options.onError?.(error);
    },
  });
};

export default useDeleteApi;
