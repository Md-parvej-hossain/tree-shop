import { FadeLoader } from 'react-spinners';

import Swal from 'sweetalert2';
import useGetApi from '../../../hooks/useGetApi';
import useDeleteApi from '../../../hooks/useDeleatApi';
import AllPlantsTable from '../../../components/Tables/AllPlantsTable';
const AllPlant = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetApi('plantes', '/plantes');

  const deletePlant = useDeleteApi('/plantes', {
    invalidateKey: 'plantes',
    successMessage: 'Plant deleted successfully',
  });

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        deletePlant.mutate(id, {
          onSuccess: () => {
            Swal.fire(
              'Deleted!',
              'Plant has been deleted successfully.',
              'success'
            );
          },
        });
      }
    });
  };

  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <FadeLoader />
      </div>
    );

  if (isError)
    return <p className="text-red-600 text-center">{error?.message}</p>;

  return (
    <div>
      <AllPlantsTable plants={data.data} onDelete={handleDelete} />
    </div>
  );
};

export default AllPlant;
