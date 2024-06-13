import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import Logo from "../Assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { toast } from 'react-hot-toast';
import Category from "./Category";



export const Navbar = (props) => {


  let isLoggedIn = props.isLoggedIn;
let setIsLoggedIn = props.setIsLoggedIn;


  const { token } = useSelector((state) => state.auth || {});
const { user } = useSelector((state) => state.profile || {});
const { totalItems } = useSelector((state) => state.cart || {});



  const [category, setCategory] = useState("");
  console.log(category);




  return (
    <div className="w-full m-auto  md:static">
      {/* fist section */}
      <div className=" w-full m-auto border-b-2 border-gray-400 hidden sm:block">
        <div className="w-4/5 h-12 flex justify-between m-auto ">
          {/* address or location */}
          <div className="flex flex-row items-center gap-2">
            <CiLocationOn className="text-[#15A9E3] text-xl" />
            <span className="text-[#56778F]">sector 22,chandigarh,India</span>
          </div>

          {/* contact */}
          <div className="flex flex-row items-center gap-2">
            <FiPhoneCall className="text-[#15A9E3] text-xl" />
            <span className="text-[#56778F]">
              Sales & Service Support / 999-999-999
            </span>
          </div>
        </div>
      </div>

      {/* second section section */}
      <div className="w-full sm:flex flex-row justify-between h-24 items-center hidden ">
        {/* logo */}
        <NavLink to="/">
        <div className="flex flex-row items-center gap-2 w-52 ml-8  h-full relative">
            <img src={Logo} alt="logo" />
            <span className="text-black font-bold text-xl  ">
              PULSE & PILLS
            </span>
        </div>
        </NavLink>

        {/* search bar */}
        <div className=" m-auto h-full items-center  flex flex-row gap-2">
          <div className="sm:w-96 md:w-[500px] flex flex-row h-12 mt-2 ">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 px-4 rounded-l-full border border-r-0 border-gray-300 focus:outline-none flex-grow font-inter bg-transparent"
            />
            <button className="bg-[#F2971F]  text-white py-2 px-4  rounded-r-full border border-l-0 border-gray-300 hover:bg-blue-600 transition duration-300 font-inter ">
              <FaSearch />
            </button>
          </div>

          {/* upload slip */}
          <div className="">
            <button className="bg-[#F2971F] w-28 h-12 rounded-full font-medium mt-2 text-white text-lg">
              Upload
            </button>
          </div>
        </div>

        {/* right side like account and other */}
        <div className="w-[22%] h-full flex flex-row justify-evenly  mr-4">
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
              {/*  */}
              {
                <Link to="/cart" className="relative">
                <FaCartShopping />{
                  totalItems> 0 && (
                    <span>
                      {totalItems}
                    </span>
                  )
                }
                </Link>
              }
            </div>

            <div>
              <FaRegHeart />
            </div>
          </div>

           {/* login - signup-logout - dashboard */}
        <div className='flex items-center gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out")
                    }}>Log in</button>
                </Link>
            }

            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign up</button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out")
                    }}>Log out</button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/user/:Activepage">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
        </div>
      </div>

      {/* mobile view first section */}
      <div className="w-full sm:hidden relative h-60 bg-gradient-to-r from-blue-700 to-blue-600 mb-16 rounded-b-[50px]">
        <div className="w-11/12 flex flex-row justify-between m-auto pt-8 items-center text-white">
          <h1 className="text-2xl font-bold ">Pulse & Pills</h1>
          <div className="flex flex-row gap-4 text-xl mr-4">
            <MdOutlineNotifications className="text-2xl" />
            <FiShoppingBag />
          </div>
        </div>

        <div className="flex flex-row h-16 mt-11 text-center w-11/12 mx-auto">
          <div className="flex flex-row h-full items-center">
            <p className="[writing-mode:vertical-lr] text-white text-lg ">
              Upto
            </p>
            <div className="bg-gradient-to-r from-yellow-400 to-red-700 bg-clip-text text-transparent text-5xl font-bold border-r-2 border-white pr-4 ">
              70%
            </div>
            <p className="text-white text-xl ml-3">
              Tricity’s Most affordable platform for Medicines
            </p>
          </div>
        </div>

        <div className="w-11/12 h-16 mx-auto absolute -bottom-6 left-5">
          <input
            className="rounded-full w-full h-full shadow-xl pl-6"
            placeholder="Search Medicine & Healthcare products"
            type="text"
          ></input>
        </div>
      </div>

      {/* category section */}
      <Category/>
    </div>
  );
};
