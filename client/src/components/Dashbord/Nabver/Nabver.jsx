// components/Navbar.jsx

import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Navbar = () => {
  return (
    <div className=" navbar bg-green-100 shadow-lg px-4">
      <div className="flex-none lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
          ☰
        </label>
      </div>

      <div className="flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex-none">
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navbar;
