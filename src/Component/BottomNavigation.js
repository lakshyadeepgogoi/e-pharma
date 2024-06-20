// BottomNavigation.js
import React, { useState, useEffect } from 'react';
import { RiHome2Line, RiUserLine, Riourinitiative2Line } from 'react-icons/ri';
import { RiKeyLine } from "react-icons/ri";

import { LiaSellsy } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { TiChartAreaOutline } from "react-icons/ti";
import { IoTrendingUpOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";




const BottomNavigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeItem, setActiveItem] = useState('home'); // State to track active item

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item); // Set the active item
  };

  if (!isMobile) {
    return null; // Render nothing for larger screens
  }

  return (
    <nav className="z-40 fixed bottom-0 left-0 right-0 bg-white px-4 py-2 flex justify-evenly items-center text-black border-t">
      <Link to='/'  className={`flex flex-col items-center ${activeItem === 'home' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('home')}>
        <RiHome2Line className="text-2xl" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to='/prescription' className={`flex flex-col items-center ${activeItem === 'village' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('village')}>
        <TiChartAreaOutline className="text-2xl" />
        <span className="text-xs mt-1">Upload</span>
      </Link>
      <Link to='/cart' className={`flex flex-col items-center ${activeItem === 'ourinitiative' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('ourinitiative')}>
        <IoTrendingUpOutline className="text-2xl" />
        <span className="text-xs mt-1">Cart</span>
      </Link>
      <Link to='/user/:activepage' className={`flex flex-col items-center ${activeItem === 'UserProfile' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('UserProfile')}>
        <FiUser className="text-2xl" />
        <span className="text-xs mt-1">Profile</span>
      </Link>
      
    </nav>
  );
};

export default BottomNavigation;
