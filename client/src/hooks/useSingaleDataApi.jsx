import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGetSingleApi = (queryKey, url, options = {}) => {
  const axiosPublic = useAxiosPublic();

  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await axiosPublic.get(url);
      return res.data;
    },
    enabled: options.enabled ?? true,
    staleTime: options.staleTime || 0,
  });
};

export default useGetSingleApi;
