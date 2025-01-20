import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";

const Menu = [
  // Menu items can be updated or removed as needed
];

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [input, setInput] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleSearch = () => {
    // Navigate to the ImagePage with the search input as a query parameter
    if (input.trim()) {
      navigate(`/ImagePage?search=${input}`);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCart = () => {
    navigate('/cart');
  };

  const handleOrder = () => {
    alert('Login First!');
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Fashion Trends
            </Link>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Handle input change
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Navigate on Enter key
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch 
              onClick={handleSearch} // Handle click on search icon
              className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>


            {/* order button */}
            <button
              onClick={handleOrder}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* Login/Profile Button */}
            <div>
              {currentUser ? (
                <button
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-2 rounded-full flex items-center gap-3 group"
                >
                  Login
                </button>
              )}
          
            </div>
            <button
              onClick={handleCart}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-2 py-1 rounded-full  justify-items-end right-2"
              >
              Go to Cart
            </button>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center ">
        <ul className="sm:flex hidden justify-center items-center gap-5">
          <Link to="/"></Link>
          <Link to="/home">Home</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/womens_wear">Women-Wear</Link>
          <Link to="/purse">Purse</Link>
          <Link to="/jewellery">Jewellery</Link>

          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <Link to="/top-rated" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      
      </div>

       </div>

  );
};

export default Navbar;
