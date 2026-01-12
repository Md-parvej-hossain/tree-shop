const RequestedSellerTable = () => {
  const requestedSellers = [
    {
      id: 1,
      name: 'Rahim Uddin',
      email: 'rahim@gmail.com',
      shopName: 'Green Plant BD',
      requestDate: '2026-01-08',
      documents: 'Submitted',
      status: 'pending',
      avatar: 'https://i.pravatar.cc/40?img=5',
    },
    {
      id: 2,
      name: 'Karim Hasan',
      email: 'karim@gmail.com',
      shopName: 'Nature House',
      requestDate: '2026-01-09',
      documents: 'Submitted',
      status: 'pending',
      avatar: 'https://i.pravatar.cc/40?img=6',
    },
  ];

  return (
    <div className="bg-base-100 shadow rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Requested Sellers</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Shop Name</th>
              <th>Request Date</th>
              <th>Documents</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {requestedSellers.map((seller, index) => (
              <tr key={seller.id}>
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={seller.avatar} alt={seller.name} />
                      </div>
                    </div>
                    <p className="font-medium">{seller.name}</p>
                  </div>
                </td>

                <td>{seller.email}</td>

                <td className="font-medium">{seller.shopName}</td>

                <td>{seller.requestDate}</td>

                <td>
                  <span className="badge badge-info badge-outline">
                    {seller.documents}
                  </span>
                </td>

                <td>
                  <span className="badge badge-warning">Pending</span>
                </td>

                <td className="flex gap-2">
                  <button className="btn btn-xs btn-success">Approve</button>
                  <button className="btn btn-xs btn-error">Reject</button>
                  <button className="btn btn-xs btn-outline">View</button>
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
