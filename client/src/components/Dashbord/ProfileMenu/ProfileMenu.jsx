// components/ProfileMenu.jsx
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const ProfileMenu = () => {
  return (
    <div className="dropdown dropdown-end  text-black">
      <label tabIndex={0} className="cursor-pointer avatar">
        <FaRegUserCircle size={28} />
      </label>

      <ul
        tabIndex={0}
        className="menu dropdown-content bg-green-200 mt-3 p-2 shadow-lg rounded-box w-52"
      >
        <li>
          <Link>My Profile</Link>
        </li>
        <li>
          <a>Account Settings</a>
        </li>
        <li>
          <a className="text-error">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
