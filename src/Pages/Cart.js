import React from 'react'
import { Link } from 'react-router-dom'
import CartItems from '../Component/CartProduct/CartItems'
import { FaAngleLeft } from "react-icons/fa6";



function Cart() {
  return (
    <div className='w-4/5 flex flex-col mx-auto my-5'>
      {/* address section */}
      <div className='w-full bg-[#FEFBF3] h-16 Border-slate-200 my-4 flex flex-row justify-between border-2 rounded-md py-2 px-4 items-center'>
        <p className='items-center text-xl'> arya nagar,hisar</p>
        <div className='w-40 bg-white h-full  place-content-center px-4 border-l-2'>
          <button className='text-center text-[#F2971F] text-xl font-semibold'>Add Address</button>
        </div>
      </div>

      {/* product checkout details */}
      <div className='my-10 w-full flex flex-row'>
        {/* left side */}
        <div className='w-3/5 border-2 '>
        <Link to="/">
          <div className='ml-4 pt-4 flex flex-row text-xl items-center'>
              <FaAngleLeft/>
              <p>Back to Shop</p>
          </div>
          </Link>

          <div className='w-full p-10'>
          <div className='flex flex-row justify-between  my-4 text-[#9D9D9D]'>
            <div>My Orders</div>
            <div>Total Items: 3</div>
          </div>

          <div className='px-4'>
            <CartItems/>
          </div>
          </div>


        </div>
        {/* right side */}
        <div className='w-2/5 border-2 border-l-transparent flex flex-col p-4'>
        {/* coupons code */}
          <div className=' flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Discount</label>
            <input type='text' placeholder='Enter your promo code' className='border-2 border-gray-300 rounded-md h-8 p-4'></input>
          </div>
          {/* total price */}
          <div className='mt-4 flex flex-col'>
            <p>Price details</p>
            <div className='bg-[#f5f4f4] p-3 flex flex-col gap-3'>
              {/* subtotal */}
              <div className='flex flex-row justify-between items-center'>
              <div className='text-gray-700 text-base'>Subtotal</div><div>100</div>
              </div>
              {/* shipping charge */}
              <div className='flex flex-row justify-between items-center'>
              <div className='text-gray-700 text-base'>Shipping Fee</div><div>20</div>
              </div>
              {/* tax */}
              <div className='flex flex-row justify-between items-center'>
              <div className='text-gray-700 text-base'>Tax 15%</div><div>15</div>
              </div>
            </div>
            {/* buttons */}
            <button className='bg-blue-500 h-10 rounded-lg w-full text-white text-lg font-medium'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart