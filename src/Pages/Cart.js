import React from 'react'

function Cart() {
  return (
    <div className='w-4/5 flex flex-col mx-auto my-5'>
      {/* address section */}
      <div className='w-full h-16 Border-slate-200 my-4 flex flex-row justify-between border-2 rounded-md py-2 px-4 items-center'>
        <p className='items-center text-xl'> arya nagar,hisar</p>
        <div className='w-40 bg-white h-full  place-content-center px-4 border-l-2'>
          <button className='text-center text-[#F2971F] text-xl font-semibold'>Add Address</button>
        </div>
      </div>

      {/* product checkout details */}
      <div>
        {/* left side */}
        <div></div>
        {/* right side */}
        <div></div>
      </div>
    </div>
  )
}

export default Cart