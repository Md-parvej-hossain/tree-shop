// src/hooks/useUpdateUserRole.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { axiosSecure } from './useAxiosSecure';

const useUpdateUserRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, role }) => {
      const res = await axiosSecure.patch(`/users/role/${email}`, { role });
      return res.data;
    },

    onSuccess: () => {
      toast.success('User role updated to seller');
      queryClient.invalidateQueries(['users']);
    },

    onError: error => {
      toast.error(
        error?.response?.data?.message || 'Failed to update user role',
      );
    },
  });
};

export default useUpdateUserRole;
