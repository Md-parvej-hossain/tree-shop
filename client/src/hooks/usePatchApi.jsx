import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const usePatchApi = (url, options = {}) => {
  const queryClient = useQueryClient();

  const {
    successMessage = 'Updated successfully',
    invalidateKey = [],
    onSuccess,
    onError,
  } = options;

  const mutation = useMutation({
    mutationFn: async (data = {}) => {
      const res = await axiosSecure.patch(url, data);
      return res.data;
    },

    onSuccess: data => {
      if (successMessage) {
        toast.success(successMessage);
      }

      if (invalidateKey?.length) {
        queryClient.invalidateQueries(invalidateKey);
      }

      if (onSuccess) {
        onSuccess(data);
      }
    },

    onError: error => {
      toast.error(error?.response?.data?.message || 'Update failed');

      if (onError) {
        onError(error);
      }
    },
  });

  return mutation;
};

export default usePatchApi;
