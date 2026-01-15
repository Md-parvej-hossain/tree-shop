import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

const UsersTable = ({ users, onDelete }) => {
  const { user } = useAuth();
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        👥 Users Management
      </h2>

      {/* Desktop & Tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-green-200 text-gray-800">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((userData, index) => (
              <tr key={userData._id}>
                <td>{index + 1}</td>

                <td className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-green-400">
                      <img
                        src={user?.photoURL}
                        alt="user"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <span className="font-semibold">{userData.name}</span>
                </td>

                <td>{userData.email}</td>

                <td>
                  <span
                    className={`badge ${
                      userData.role === 'admin'
                        ? 'badge-success'
                        : 'badge-ghost'
                    }`}
                  >
                    {userData.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      userData.status === 'active'
                        ? 'bg-green-200'
                        : 'bg-green-200'
                    }`}
                  >
                    {userData.status}
                  </span>
                </td>

                <td>{new Date(userData.createdAt).toLocaleDateString()}</td>
                <td className="flex gap-2 justify-center">
                  <Link
                    to={`/dashboard/users/${userData._id}`}
                    className="btn btn-xs btn-outline"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => onDelete(userData._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {users?.map(user => (
          <div key={user._id} className="card bg-base-100 shadow border">
            <div className="card-body p-4">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-green-400">
                    <img
                      src={
                        user.photo || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'
                      }
                      alt="user"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <span className="badge badge-outline">{user.role}</span>
                <span
                  className={`badge ${
                    user.status === 'active' ? 'badge-info' : 'badge-error'
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <p className="text-sm mt-1">Joined: {user.joinedDate}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => onDelete(user._id)}
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

export default UsersTable;
