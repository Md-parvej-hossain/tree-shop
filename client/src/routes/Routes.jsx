import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Shop from '../pages/ShopAllProducts/Shop';
import PlantPackages from '../pages/PlantPackages/PlantPackages';
import Blog from '../pages/Blogs/Blog';
import ContactUs from '../pages/ContactUs/ContactUs';
import Login from '../pages/Login/Login';
import DashboardLayout from '../layouts/DashboardLayout';
import Overview from '../pages/Dashboard/Overview/Overview';
import Users from '../pages/Dashboard/user/Users';
import AddToCard from '../pages/AddToCard/AddToCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <p>Error...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/packages',
        element: <PlantPackages />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/addToCard',
        element: <AddToCard />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'users', element: <Users /> },
      { path: 'settings', element: <p>This is a sattting</p> },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default router;
