import React from 'react';
import landing from '../Component/Assets/landing img.png'

function Home() {
  return (
    <div className='w-full h-full'>
        <div>
            <img src={landing} alt='landing' className='w-full h-full object-cover mt-4'/>
        </div>
        {/* 80% screen start */}
        <div className='w-4/5 m-auto '>
        {/* search bar options */}
            <div className='w-full h-20 md:flex flex-row justify-evenly mt-8 items-center hidden'>
                <h1>Select a product</h1>
                <div className='w-60 h-10  '> <select name="selectedFruit" className='w-full h-full pr-4 pl-4 border-2 rounded-full'>
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="orange">Orange</option>
                    </select>
                </div>
                <div className='w-60 h-10  '>
                    <select name="selectedFruit" className='w-full h-full pr-4 pl-4 border-2 rounded-full'>
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="orange">Orange</option>
                    </select>
                </div>
                <div className='text-center '>or</div>
                <div className='w-64 h-10'><input className='w-full h-full pr-4 pl-4 border-2 rounded-full' placeholder='Enter SKU'></input></div>
                <div className='w-64 h-10'><button className='w-full h-full pr-4 pl-4 border-2 rounded-full bg-[#F2971F]'>Shop Now</button></div>
            </div>
        </div>
    </div>
  )
}

export default Home