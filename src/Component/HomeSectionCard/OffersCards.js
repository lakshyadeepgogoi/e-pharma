import React from 'react'
import offerMedicine from '../Assets/Medicine/offerMedicine.png'
import CheckSharpIcon from '@mui/icons-material/CheckSharp';

function OffersCards({key, title, price, image}) {
  const product = {key, title, price,image};
  return (
    <div className=' h-[22rem] flex flex-row my-6 rounded-lg border-2 txt-[#184363]'>
    {/* image section */}
        <div>
            <img src={offerMedicine} alt='product on sale' className='h-full w-72 object-cover'/>
        </div>
        {/* product details */}
        <div className='pl-5 pt-7 w-[22rem] gap-2 flex flex-col'>
            <h1 className='text-2xl font-bold'>Vitamin C 500mg Sugarless</h1>
            <h2 className='text-xl font-bold'>Rs16.00 – Rs.35.00</h2>
            <ul className='my-10 space-y-2'>
                <li> <CheckSharpIcon className='text-[#39CB74]'/> cleaning programs</li>
                <li> <CheckSharpIcon className='text-[#39CB74]'/> Digital display</li>
                <li><CheckSharpIcon className='text-[#39CB74]'/> Memory for 1 user</li>
            </ul>

            <div>
            <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Check Out </span>
</a>
            </div>
        </div>

    </div>
  )
}

export default OffersCards