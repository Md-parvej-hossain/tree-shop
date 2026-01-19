import Swal from 'sweetalert2';
import useGetApi from '../../hooks/useGetApi';
import usePatchStatus from '../../hooks/usePatchStatus';
import useUpdateUserRole from '../../hooks/useUpdateUserRole';
import useDeleteApi from '../../hooks/useDeleatApi';

const RequestedSellerTable = () => {
  const { data: sellers = [], isLoading } = useGetApi(
    ['seller-requests'],
    '/seller-requests',
  );

  const updateSellerStatus = usePatchStatus('/seller-requests', {
    invalidateKey: ['seller-requests'],
    successMessage: 'Seller status updated successfully!',
  });

  const updateUserRole = useUpdateUserRole();

  const deleteSeller = useDeleteApi('/seller-requests', {
    invalidateKey: ['seller-requests'],
    successMessage: 'Seller deleted successfully',
  });

  const handleUpdateStatus = (seller, status) => {
    updateSellerStatus.mutate(
      {
        id: seller._id,
        data: { status },
      },
      {
        onSuccess: () => {
          // ✅ Update role ONLY when approved
          if (status === 'approved') {
            updateUserRole.mutate({
              email: seller.email,
              role: 'seller',
            });
          }
        },
      },
    );
  };

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the request!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        deleteSeller.mutate(id, {
          onSuccess: () => {
            Swal.fire(
              'Deleted!',
              'Seller request has been deleted.',
              'success',
            );
          },
        });
      }
    });
  };

  const formatDate = date =>
    new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="bg-base-100 shadow rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Requested Sellers</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Shop Name</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {sellers.map((seller, index) => (
              <tr key={seller._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={seller.sellerImage} alt="Seller" />
                    </div>
                  </div>
                </td>

                <td>{seller.email}</td>
                <td className="font-medium">{seller.shopName}</td>
                <td>{formatDate(seller.requestDate)}</td>

                <td>
                  <span
                    className={`badge capitalize ${
                      seller.status === 'approved'
                        ? 'badge-success'
                        : seller.status === 'rejected'
                          ? 'badge-error'
                          : 'badge-warning'
                    }`}
                  >
                    {seller.status}
                  </span>
                </td>

                <td className="flex gap-2">
                  <button
                    disabled={
                      seller.status === 'approved' ||
                      updateSellerStatus.isLoading ||
                      updateUserRole.isLoading
                    }
                    onClick={() => handleUpdateStatus(seller, 'approved')}
                    className="btn btn-xs btn-success"
                  >
                    Approve
                  </button>

                  <button
                    disabled={
                      seller.status === 'rejected' ||
                      updateSellerStatus.isLoading
                    }
                    onClick={() => handleUpdateStatus(seller, 'rejected')}
                    className="btn btn-xs btn-warning"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedSellerTable;
