import React from 'react';
import Product from "../../Assets/product_image/Product1.png"

function ProductShort() {
  return (
    <div className='flex flex-row gap-2 w-[24rem] h-28 m-2 rounded-lg border-2 border-gray-200'>
        <div className='h-full'>
            <img src={Product} alt='product1' className='w-32 h-full object-cover rounded-md'/>
        </div>
        <div className='py-4  flex flex-col gap-2'>
            <h1 className='text-base font-medium'>Henry Blooms One Night Collagen</h1>
            <span className='text-[#184363] font-light text-base'>Rs44.00-Rs39.00</span>
        </div>
    </div>
  )
}

export default ProductShort