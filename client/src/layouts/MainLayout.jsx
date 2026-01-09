import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="h-[88px]">
        <Navbar />
      </div>

      <div className="min-h-[calc(100vh-440px)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
