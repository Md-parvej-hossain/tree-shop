// components/Sidebar.jsx
import { Link, NavLink } from 'react-router';
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdLogout,
  MdFormatListBulletedAdd,
} from 'react-icons/md';
import { MdOutlinePayment } from 'react-icons/md';
import { FaBorderAll } from 'react-icons/fa';
import { MdOutlineBorderAll } from 'react-icons/md';
import { MdPendingActions } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
const Sidebar = () => {
  const { logOut } = useAuth();
  const { role } = useRole();
  //console.log(role);
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

          {role == 'seller' && (
            <li>
              <NavLink to="/dashboard/addPlant">
                <MdFormatListBulletedAdd /> AddPlant
              </NavLink>
            </li>
          )}
          {role == 'admin' && (
            <li>
              <NavLink to="/dashboard/users">
                <MdPeople /> Users
              </NavLink>
            </li>
          )}
          {role == 'admin' && (
            <li>
              <NavLink to="/dashboard/pendingSeller">
                <MdPendingActions /> PendingSeller
              </NavLink>
            </li>
          )}

          {role == 'seller' && (
            <li>
              <NavLink to="/dashboard/allPlant">
                <MdOutlineBorderAll /> AllPlant
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/dashboard/myOrder">
              <FaBorderAll /> My Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <MdOutlinePayment /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings">
              <MdSettings /> Settings
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <button onClick={logOut} className="text-error">
              <MdLogout /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
