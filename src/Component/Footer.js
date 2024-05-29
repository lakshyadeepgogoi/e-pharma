import React from 'react'
import Logo from "./Assets/Logo1.png";
import Payment from "./Assets/payments2.png.png";
import { FaSearch } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-full hidden sm:block bg-[#184363] h-96'>
    {/* first section */}
      <div className='w-[87%] m-auto  flex flex-row h-80 pt-8'>

        <div className='flex flex-col items-baseline h-11 '>
          <div className='flex flex-row gap-2 h-full'>
            <img src={Logo} alt='logo' className='h-full object-cover'/>
            <div className='text-2xl text-white font-bold drop-shadow-xl'>PULSE & PILLS</div>
          </div>

          <p className='text-white my-4'>Stay tuned for latest updates and new features</p>

          <div className='w-80 flex flex-row h-12 mt-2 ' >
          <input type='text' placeholder='Email address' className='w-72 py-2 px-4 rounded-l-full border border-r-0 border-gray-300 focus:outline-none flex-grow font-inter bg-transparent'/>
              <button className='bg-[#F2971F] w-16 text-white py-2 px-4  rounded-r-full border border-l-0 border-gray-300 hover:bg-blue-600 transition duration-300 font-inter '>
              <FaSearch />
              </button>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>


{/* second section */}
      <div className='w-[87%] h-10 border-t-2 border-gray-300 m-auto flex flex-row justify-between items-center'>
        <div className='text-white'>Developed by RowX</div>
        <div>
          <img src={Payment} alt='logo of accept payment'/>
        </div>
      </div>
    </div>
  )
}

export default Footer