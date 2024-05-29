import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import Logo from "./Assets/Logo.png"
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import Medicine from "./Assets/Medicine.png";
import Health_care from './Assets/Health_care.png';
import Lab from './Assets/Lab test.png';
import ayurvadic from './Assets/ayurvadic.png';
import equipment from './Assets/equipment.png';
import surgical from './Assets/surgical items.png'
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";





export const Navbar = () => {

  const [category, setCategory] = useState("");
  console.log(category);


  return (
    <div className='w-full m-auto  md:static'>

    {/* fist section */}
    <div className=' w-full m-auto border-b-2 border-gray-400 hidden md:block'>
      <div className='w-4/5 h-12 flex justify-between m-auto '>
        {/* address or location */}
        <div className='flex flex-row items-center gap-2'>
          <CiLocationOn className='text-[#15A9E3] text-xl' /><span className='text-[#56778F]'>sector 22,chandigarh,India</span>
        </div>

        {/* contact */}
        <div className='flex flex-row items-center gap-2'>
        <FiPhoneCall className='text-[#15A9E3] text-xl' /><span className='text-[#56778F]'>Sales & Service Support / 999-999-999</span>
        </div>
      </div>
    </div>
      

{/* second section section */}
      <div className='w-full md:flex flex-row justify-between h-24 items-center hidden '>
        {/* logo */}
        <div className='flex flex-row items-center gap-2 w-52 ml-8  h-full'> 
          <img src={Logo} alt='logo'/>
          <span className='text-black font-bold text-xl  '>PULSE & PILLS</span>
        </div>

        {/* search bar */}
        <div className=' m-auto h-full items-center  flex flex-row gap-4'>
          <div className='w-[600px] flex flex-row h-12 mt-2 ' >
          <input type='text' placeholder='What are you looking for?' className='w-full py-2 px-4 rounded-l-full border border-r-0 border-gray-300 focus:outline-none flex-grow font-inter bg-transparent'/>
              <button className='bg-[#F2971F]  text-white py-2 px-4  rounded-r-full border border-l-0 border-gray-300 hover:bg-blue-600 transition duration-300 font-inter '>
              <FaSearch />
              </button>
          </div>

             {/* upload slip */}
             <div className=''><button className='bg-[#F2971F] w-32 h-12 rounded-full font-medium mt-2 text-white text-lg'>Upload</button></div>

        </div>
       
         
        {/* right side like account and other */}
        <div className='w-1/5 h-full flex flex-row justify-evenly  mr-4'>
          <div className='flex flex-row items-center gap-6 my-auto text-2xl'>
          <MdOutlineNotifications />
          <FaCartShopping />
          <FaRegHeart /></div>
            <div className='flex flex-row items-center gap-2 text-xl'>
              <VscAccount />
              <span> Account</span>
            </div>
          </div>
      </div>


            {/* mobile view first section */}
        <div className='w-full md:hidden relative h-60 bg-gradient-to-r from-blue-700 to-blue-600 mb-16 rounded-b-[50px]'>
          <div className='w-11/12 flex flex-row justify-between m-auto pt-8 items-center text-white'>
            <h1 className='text-2xl font-bold '>Pulse & Pills</h1>
            <div className='flex flex-row gap-4 text-xl mr-4'>
              <MdOutlineNotifications className='text-2xl'/>
              <FiShoppingBag />

            </div>
          </div>

          <div className='flex flex-row h-16 mt-11 text-center w-11/12 mx-auto'>
            <div className='flex flex-row h-full items-center'>
              <p className='[writing-mode:vertical-lr] text-white text-lg '>Upto</p>
              <div className='bg-gradient-to-r from-yellow-400 to-red-700 bg-clip-text text-transparent text-5xl font-bold border-r-2 border-white pr-4 '>70%</div>
              <p className='text-white text-xl ml-3'>Tricity’s Most affordable platform for Medicines</p>
            </div>
          </div>

          <div className='w-11/12 h-16 mx-auto absolute -bottom-6 left-5'>
            <input className='rounded-full w-full h-full shadow-xl pl-6' placeholder='Search Medicine & Healthcare products' type='text'></input>
          </div>

        </div>


{/* category section */}
      <div className=' w-full h-max md:h-36'>
        <div className='w-11/12 h-full md:bg-[#E7EFFF] m-auto rounded-xl'>
          <ul className='grid grid-cols-3  justify-between items-center h-full md:grid-cols-6 gap-2'>
            <li onClick={()=>{setCategory("")}} className=' mt-4 bg-[#E7EFFF] md::bg-inherit rounded-2xl text-center pt-4 sm:p-2'><Link to='/Medicine'><img src={Medicine} alt='medicine ' className='w-20 h-20 m-auto '/><span>Medicine</span></Link></li>
            <li onClick={()=>{setCategory("")}} className=' mt-4 bg-[#E7EFFF] md::bg-inherit  rounded-2xl text-center pt-4 sm:p-2'><Link to='/Health'><img src={Health_care} alt='Health_care '  className='w-20 h-20 m-auto'/><span>Health care</span></Link></li>
            <li onClick={()=>{setCategory("")}} className=' mt-4 bg-[#E7EFFF] md::bg-inherit rounded-2xl text-center  pt-4 sm:p-2'><Link to='/Lab'><img src={Lab} alt='Lab'  className='w-20 h-20 m-auto'/><span>Lab test</span></Link></li>
            <li onClick={()=>{setCategory("")}} className=' mt-4 bg-[#E7EFFF] md::bg-inherit rounded-2xl text-center  pt-4 sm:p-2'><Link to='/Surgical'><img  src={ayurvadic} alt='ayurvadic'  className='w-20 h-20 m-auto'/><span>Surgical Items</span></Link></li>
            <li onClick={()=>{setCategory("")}} className=' mt-4 bg-[#E7EFFF] md::bg-inherit rounded-2xl text-center  pt-4 sm:p-2'><Link to='/Ayurvedic'><img src={equipment} alt='equipment'  className='w-20 h-20 m-auto'/><span>Ayurvedic Medicine</span></Link></li>
            <li onClick={()=>{setCategory("")}} className=' mt-4 bg-[#E7EFFF] md::bg-inherit rounded-2xl text-center  pt-4 sm:p-2'><Link to='/Equipment'><img src={surgical} alt='surgical'  className='w-20 h-20 m-auto'/><span>Equipment on Rent</span></Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}
