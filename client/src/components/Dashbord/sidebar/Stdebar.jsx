// components/Sidebar.jsx
import { Link, NavLink } from 'react-router';
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdLogout,
  MdFormatListBulletedAdd,
} from 'react-icons/md';
const Sidebar = () => {
  return (
    <div className="drawer-side shadow-lg shadow-green-600 ">
      <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

      <aside className="w-64 bg-green-100 min-h-full ">
        <div className="p-4  text-xl font-bold">
          <Link to="/" className="text-green-400">
            Plant Net
          </Link>
        </div>

        <ul className="menu p-4 gap-2">
          <li>
            <NavLink to="/dashboard" end>
              <MdDashboard /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/users">
              <MdPeople /> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addPlant">
              <MdFormatListBulletedAdd /> AddPlant
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/settings">
              <MdSettings /> Settings
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <button className="text-error">
              <MdLogout /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
