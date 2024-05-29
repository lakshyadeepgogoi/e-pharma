import React from 'react'
import Medicine from '../Assets/Medicine/Item.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function HomeSectionCard() {
  return (
    <div className='sm:h-96 h-max sm:w-[17rem]  flex flex-col rounded-xl border-2 my-4 relative' >
        <img src={Medicine} alt='medicine' className='w-full object-cover  sm:h-48'/>
        <div className='w-full h-full p-2 sm:p-3 flex flex-col'>
        <div className=' text-[#15A9E3] text-base'>Protein</div>
        <h1 className='text-[#184363] font-semibold text-base  mb-4'>Nutren Diabetes Vanilla</h1>

            <div className='flex flex-row h-10 mb-1 sm:mb-6 justify-between items-center'>
                <div className='text-[#184363]  text-lg'>Rs. 150</div>
                <div className='w-12 h- text-center  bg-[#FFC000] rounded-full block sm:hidden shadow-md align-middle '>    <AddShoppingCartIcon className='mt-1'/></div>
            </div>      
        <button className='text-center align-middle bg-[#EDF4] h-10 w-full  mx-auto rounded-full mb-2 hover:bg-[#FFC000] hidden sm:block'>Add to Cart</button>

        </div>
       
    </div>
  )
}

export default HomeSectionCard