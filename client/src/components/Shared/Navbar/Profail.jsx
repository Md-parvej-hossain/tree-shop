import { useState, useRef, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';
const Profail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex relative z-10 block px-2 py-1 gap-2  rounded-md
            border border-green-400
          focus:outline-none focus:ring focus:ring-blue-300"
      >
        <FaRegUserCircle className="text-gray-800 size-7 " />
        <svg
          className="w-5 h-5 text-gray-800 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute -right-20 md:right-0 z-20 w-48 py-2 mt-2 origin-top-right
             rounded-md shadow-xl bg-green-100
            transition transform duration-100 ease-out scale-100 opacity-100 text-gray-950"
        >
          {['Your profile', 'Help', 'Dashboard', 'Sign Out'].map(item => (
            <Link
              key={item}
              to={'dashboard'}
              className="block px-4 py-3 text-sm text-gray-950 capitalize
                transition-colors duration-300
                hover:bg-gray-100 
                dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profail;
