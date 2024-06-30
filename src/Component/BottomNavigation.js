// BottomNavigation.js
import React, { useState, useEffect } from 'react';
import PrescriptionUpload from "../Component/Assets/icon/prescriptionIcon.png";
import cart from "../Component/Assets/icon/cart.png";
import Home from "../Component/Assets/icon/home.png";
import User from "../Component/Assets/icon/user.png";
import { Link } from 'react-router-dom';





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
    <nav className="z-40 fixed bottom-0 left-0 right-0 bg-white px-4 py-2 flex justify-evenly items-center gap-6 text-black border-t">
      <Link to='/'  className={`flex flex-col items-center ${activeItem === 'home' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('home')}>
        <img src={Home} className="w-8 h-8" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to='/prescription' className={`flex flex-col items-center ${activeItem === 'village' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('village')}>
        <img src={PrescriptionUpload} className='w-8 h-8'/>
        <span className="text-xs mt-1">Upload</span>
      </Link>
      <Link to='/cart' className={`flex flex-col items-center ${activeItem === 'ourinitiative' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('ourinitiative')}>
        <img src={cart} className="w-8 h-8" />
        <span className="text-xs mt-1">Cart</span>
      </Link>
      <Link to='/user/:activepage' className={`flex flex-col items-center ${activeItem === 'UserProfile' ? 'text-green-500' : ''}`} onClick={() => handleItemClick('UserProfile')}>
        <img src={User} className="w-8 h-8" />
        <span className="text-xs mt-1">Profile</span>
      </Link>
      
    </nav>
  );
};

export default BottomNavigation;
