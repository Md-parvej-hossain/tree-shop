import useDeleteApi from '../../../hooks/useDeleatApi';
import useGetApi from '../../../hooks/useGetApi';
import UsersTable from '../../../components/Tables/UsersTable';
import Swal from 'sweetalert2';
const Users = () => {
  const { data = [], isLoading, isError, error } = useGetApi('users', '/users');
  console.log(data);
  const deleteUser = useDeleteApi('/users', {
    invalidateKey: 'users',
    successMessage: 'User deleted successfully',
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
        deleteUser.mutate(id, {
          onSuccess: () => {
            Swal.fire(
              'Deleted!',
              'User has been deleted successfully.',
              'success'
            );
          },
        });
      }
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div>
      <UsersTable
        users={data}
        onDelete={handleDelete}
        deleting={deleteUser.isLoading}
      />
    </div>
  );
};

export default Users;
