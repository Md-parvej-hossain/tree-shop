import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/images/logo.png';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';
import { MdLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import CartSidebar from '../../Home/CartSidebar/CartSidebar';
import Profail from './Profail';
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const count = 6;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-50 shadow  ">
      <div className="container py-4 lg:py-0 mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Logo & Mobile Toggle */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className=" md:w-[150px] md:h-[80px] w-[100px] h-[48px] object-cover pb-2"
                src={logo}
                alt="Logo"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-900 hover:text-gray-600  focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out
              lg:relative lg:flex lg:w-auto lg:items-center lg:opacity-100
            ${
              isOpen
                ? 'translate-x-0 opacity-100 bg-white  shadow-lg lg:shadow-none'
                : '-translate-x-full opacity-0 lg:translate-x-0'
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink
                className="px-2 py-2 mx-2 mt-2 font-semibold text-gray-950 rounded-md transition-colors duration-300 hover:text-green-600
                     lg:mt-0"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                to="about-us"
                className="px-2 py-2 mx-2 mt-2 font-semibold text-gray-950 rounded-md transition-colors duration-300 hover:text-green-600
                     lg:mt-0"
              >
                About Us
              </NavLink>
              <NavLink
                className="px-2 py-2 mx-2 mt-2 font-semibold text-gray-950 rounded-md transition-colors duration-300 hover:text-green-600
                     lg:mt-0"
                to="shop"
              >
                Shop (All Products)
              </NavLink>
              <NavLink
                className="px-2 py-2 mx-2 mt-2 font-semibold text-gray-950 rounded-md transition-colors duration-300 hover:text-green-600
                     lg:mt-0"
                to="packages"
              >
                Packages
              </NavLink>
              <NavLink
                className="px-2 py-2 mx-2 mt-2 font-semibold text-gray-950 rounded-md transition-colors duration-300 hover:text-green-600
                     lg:mt-0"
                to="blog"
              >
                Blog
              </NavLink>
              <NavLink
                className="px-2 py-2 mx-2 mt-2 font-semibold text-gray-950 rounded-md transition-colors duration-300 hover:text-green-600
                     lg:mt-0"
                to="contact-us"
              >
                Contact Us
              </NavLink>

              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary className="text-gray-800 text-lg hover:text-green-600 font-semibold">
                      Plants
                    </summary>
                    <ul className="p-2 bg-green-100 w-40 text-gray-800  z-20">
                      <li>
                        <a>Flowering Plants</a>
                      </li>
                      <li>
                        <a>Indoor Plants</a>
                      </li>
                      <li>
                        <a>Medicinal Plants</a>
                      </li>
                      <li>
                        <a>Herbs</a>
                      </li>
                      <li>
                        <a>Succulent Plants</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex items-center mt-4 lg:mt-0">
              <Link
                to={'/addToCard'}
                className="relative inline-block mr-5 cursor-pointer"
              >
                {/* Cart Icon */}
                <FaShoppingCart className="text-green-600 text-2xl " />

                {/* Badge */}
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                    {count}
                  </span>
                )}
              </Link>
              <Profail />
              <button className="flex items-center focus:outline-none font-bold border border-green-500 px-3 py-1 rounded-md text-gray-950 hover:bg-green-600 hover:text-white transition duration-300">
                <Link to={'login'}>Login</Link>
              </button>
              <button onClick={toggleTheme} className="pl-3">
                {theme === 'light' ? (
                  <MdOutlineDarkMode size={30} />
                ) : (
                  <MdLightMode className="text-black" size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
