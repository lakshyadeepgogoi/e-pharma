import React, { useContext, useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import Logo from "../Assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import Category from "./Category";
import { CartContext } from "../../Context/ContextProvider";
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const BASE_URL = 'http://localhost:4000/api';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [userName, setUserName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
          const response = await axios.get(`${BASE_URL}/users/getUsers`, config);
          setUserName(response.data.firstName);
          setIsLoggedIn(true); // Ensure isLoggedIn is set to true on successful login
        } else {
          setIsLoggedIn(false);
          navigate('/login');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error.response || error.message);
        if (error.response && error.response.status === 401) {
          toast.error('Unauthorized. Please log in.', {
            duration: 4000,
            position: 'top-right',
            onClose: () => {
              setIsLoggedIn(false);
              navigate('/login');
            },
          });
        }
      }
    };

    fetchUserData();
  }, [navigate, setIsLoggedIn]);

  const UploadHandler = () => {
    navigate('/prescription');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    toast.success("Logged out");
    navigate('/');
  };

  const categoryPaths = ["/", "/Medicine", "/Health", "/Lab", "/Surgical", "/Ayurvedic", "/Equipment"];

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/search`, { params: { query } });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Failed to search products:', error.message);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="w-full m-auto md:static">
      {/* First section */}
      <div className="w-full m-auto border-b-2 border-gray-400 hidden sm:block">
        <div className="w-4/5 h-12 flex justify-between m-auto">
          {/* Address or location */}
          <div className="flex flex-row items-center gap-2">
            <CiLocationOn className="text-[#15A9E3] text-xl" />
            <span className="text-[#56778F]">sector 22, chandigarh, India</span>
          </div>
          {/* Contact */}
          <div className="flex flex-row items-center gap-2">
            <FiPhoneCall className="text-[#15A9E3] text-xl" />
            <span className="text-[#56778F]">
              Sales & Service Support / 999-999-999
            </span>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="w-full sm:flex flex-row justify-between h-24 items-center hidden">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex md:flex-row items-center md:w-48 lg:w-52 xl:w-60 ml-8 h-full relative">
            <img src={Logo} alt="logo" className="w-20 h-16"/>
            <span className="text-black font-bold text-xl inline w-full">
              PULSE & PILLS
            </span>
          </div>
        </NavLink>

        {/* Search bar */}
        <div className="m-auto h-full items-center flex flex-row gap-2 relative">
          <div className="sm:w-72 lg:w-[500px] flex flex-row h-12 mt-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 rounded-l-full border border-r-0 border-gray-300 focus:outline-none flex-grow font-inter bg-transparent"
            />
            <button className="bg-[#F2971F] text-white py-2 px-4 rounded-r-full border border-l-0 border-gray-300 hover:bg-blue-600 transition duration-300 font-inter">
              <FaSearch />
            </button>
          </div>
          {/* Search Results Dropdown */}
          {searchQuery && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-10">
              <ul>
                {searchResults.map(product => (
                  <li key={product._id} className="p-2 border-b hover:bg-gray-100">
                    <Link to={`/Product-details/${product._id}`} onClick={() => setSearchQuery('')}>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Upload slip */}
          <div>
            <button className="bg-[#F2971F] sm:w-16 lg:w-28 h-12 rounded-2xl lg:rounded-full font-medium mt-2 text-white lg:text-lg text-lg" onClick={UploadHandler}>
              Upload
            </button>
          </div>
        </div>

        {/* Right side like account and other */}
        <div className="w-[22%] h-full flex flex-row justify-evenly mr-4">
          <div className="flex flex-row items-center gap-5 my-auto text-2xl">
            <div className="relative">
              <div className="absolute">
                <span className="text-xs">2</span>
              </div>
              <div>
                <MdOutlineNotifications />
              </div>
            </div>
            <div>
              <Link to="/cart" className="relative">
                {cart.length > 0 && <span className="text-xs absolute z-10 left-3 -top-3 text-black font-bold">{cart.length}</span>}
                <FaCartShopping />                
              </Link>
            </div>
            {/* <div>
              <FaRegHeart />
            </div> */}
          </div>

          {/* Login - Signup-Logout - Dashboard */}
          <div className="flex items-center gap-x-4">
            {isLoggedIn ? (
              <>
                <button onClick={handleLogout} className="">
                <LogoutIcon sx={{ fontSize: 30 }}/>

                </button>
                <Link to="/user/dashboard">
                  <button className=""><AccountCircleIcon sx={{ fontSize: 30 }}/></button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile view first section */}
      <div className="w-full sm:hidden relative h-60 bg-gradient-to-r from-blue-700 to-blue-600 mb-16 rounded-b-[50px]">
        <div className="w-11/12 flex flex-row justify-between m-auto pt-6 items-center text-white">
        <div className="flex flex-row gap-2">
        <img src={Logo} className="w-8 h-8"/>
        <h1 className="text-xl font-semibold">Pulse & Pills</h1>
        </div>
          <div className="flex flex-row gap-4 text-xl mr-4">
            <MdOutlineNotifications className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-row h-16 mt-11 text-center w-11/12 mx-auto">
          <div className="flex flex-row h-full items-center">
            <p className="[writing-mode:vertical-lr] text-white text-lg">Upto</p>
            <div className="bg-gradient-to-r from-yellow-400 to-red-700 bg-clip-text text-transparent text-5xl font-bold border-r-2 border-white pr-4">
              70%
            </div>
            <p className="text-white text-xl ml-3">
              Tricity’s Most affordable platform for Medicines
            </p>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="w-11/12 h-16 mx-auto absolute -bottom-6 left-5">
          <input
            className="rounded-full w-full h-full shadow-xl pl-6"
            placeholder="Search Medicine & Healthcare products"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Mobile Search Results Dropdown */}
          {searchQuery && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-10">
              <ul>
                {searchResults.map(product => (
                  <li key={product._id} className="p-2 border-b hover:bg-gray-100">
                    <Link to={`/Product-details/${product._id}`} onClick={() => setSearchQuery('')}>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Category section */}
      {categoryPaths.includes(currentPath) && <Category />}
    </div>
  );
};

export default Navbar;
