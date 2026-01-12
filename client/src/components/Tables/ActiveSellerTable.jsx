const ActiveSellerTable = () => {
  const sellers = [
    {
      id: 1,
      name: 'Rahim Uddin',
      email: 'rahim@gmail.com',
      products: 45,
      sales: 12500,
      status: 'active',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: 2,
      name: 'Karim Hasan',
      email: 'karim@gmail.com',
      products: 30,
      sales: 8400,
      status: 'active',
      avatar: 'https://i.pravatar.cc/40?img=2',
    },
  ];

  return (
    <div className="bg-base-100 shadow rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Active Sellers</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Email</th>
              <th>Products</th>
              <th>Total Sales</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={seller.id}>
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={seller.avatar} alt={seller.name} />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{seller.name}</p>
                    </div>
                  </div>
                </td>

                <td>{seller.email}</td>

                <td>
                  <span className="badge badge-info badge-outline">
                    {seller.products}
                  </span>
                </td>

                <td className="font-medium">৳ {seller.sales}</td>

                <td>
                  <span className="badge badge-success">Active</span>
                </td>

                <td className="flex gap-2">
                  <button className="btn btn-xs btn-outline btn-primary">
                    View
                  </button>
                  <button className="btn btn-xs btn-outline btn-error">
                    Block
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

export default ActiveSellerTable;
