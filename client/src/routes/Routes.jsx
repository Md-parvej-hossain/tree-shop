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
import SignUp from '../pages/SignUp/SignUp';
import AddPlant from '../pages/Dashboard/addPlant/AddPlant';
import UpdatePlant from '../pages/Dashboard/updatePlant/UpdatePlant';
import AllPlant from '../pages/Dashboard/Allplant/AllPlant';
import ActiveSeller from '../pages/Dashboard/ActiveSeller/ActiveSeller';
import PandingSeller from '../pages/Dashboard/PandingSaller/PandingSeller';
import PrivateRoute from './PrivateRoutes';

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
        element: (
          <PrivateRoute>
            <AddToCard />
          </PrivateRoute>
        ),
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'addPlant',
        element: <AddPlant />,
      },
      {
        path: 'upDatePlant/:id',
        element: <UpdatePlant />,
      },
      {
        path: 'activeSeller',
        element: <ActiveSeller />,
      },
      {
        path: 'pendingSeller',
        element: <PandingSeller />,
      },
      {
        path: 'allPlant',
        element: <AllPlant />,
      },
      {
        path: 'settings',
        element: <p>This is a sattting</p>,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signUp',
    element: <SignUp />,
  },
]);

export default router;
