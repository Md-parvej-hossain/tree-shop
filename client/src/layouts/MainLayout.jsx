import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import ScrollToTopButton from '../components/Shared/button/ScrollToTopButton';

const MainLayout = () => {
  return (
    <div>
      <div className="h-[88px]">
        <Navbar />
      </div>
      <ScrollToTopButton />
      <div className="min-h-[calc(100vh-440px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
