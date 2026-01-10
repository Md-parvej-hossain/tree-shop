// layout/DashboardLayout.jsx
import { Outlet } from 'react-router';
import Navbar from '../components/Dashbord/Nabver/Nabver';
import Sidebar from '../components/Dashbord/sidebar/Stdebar';

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        <Navbar />
        <main className="p-4 bg-zinc-300 shadow-lg min-h-screen">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
