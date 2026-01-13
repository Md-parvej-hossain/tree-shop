import { Link } from 'react-router';

const AllPlantsTable = ({ plants, onDelete }) => {
  console.log(plants);
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">🌿 All Plants</h2>

      {/* Desktop & Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-green-200 text-gray-800">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {plants?.map((plant, index) => (
              <tr key={plant._id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{plant.name}</td>
                <td>{plant.type}</td>
                <td>{plant.category}</td>
                <td>${plant.newPrice}</td>
                <td className="flex gap-2 justify-center">
                  <Link
                    to={`/dashboard/upDatePlant/${plant._id}`}
                    className="btn btn-sm btn-info text-white"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => onDelete(plant._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Card Style) */}
      <div className="md:hidden space-y-4">
        {plants?.map(plant => (
          <div key={plant._id} className="card bg-base-100 shadow-md border">
            <div className="card-body p-4">
              <h3 className="text-lg font-bold text-green-700">{plant.name}</h3>

              <p>
                <span className="font-semibold">Type:</span> {plant.type}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{' '}
                {plant.category}
              </p>
              <p>
                <span className="font-semibold">Price:</span> $ {plant.newPrice}
              </p>

              <div className="flex gap-2 mt-3">
                <Link
                  to={`/dashboard/update-plant/${plant._id}`}
                  className="btn btn-sm btn-info flex-1 text-white"
                >
                  Update
                </Link>

                <button
                  onClick={() => onDelete(plant._id)}
                  className="btn btn-sm btn-error flex-1 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlantsTable;
