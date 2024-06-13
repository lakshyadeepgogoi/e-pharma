import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();




    const[formData, setFormData] =useState({
        Mobilenumber:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
            setFormData( (prevData) =>(
                {             ...prevData,
                    [event.target.name]:event.target.value}
             

            ))
    }

    function sumbitHandler(event){ 
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/")
    }

  return (
   <form onSubmit={sumbitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
   <label className=' w-full '>
    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        Enter Mobile No.<sup className=' text-pink-200'>*</sup>
    </p>
    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type='number' value={formData.email} onChange={changeHandler} placeholder='enter Mobile Number' name='Mobilenumber'></input>
   </label>

   <label className='relative w-full '>
    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        password<sup className=' text-pink-200'>*</sup>
    </p>

    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type={showPassword? ("text"):("password")} value={formData.password} onChange={changeHandler} placeholder='enter password' name='password'/>

    <span className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>setShowPassword((prev) => !prev)}>
        {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
    </span>

    <Link to="#">
        <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forget Password</p>
    </Link>
   </label>

   <button className='bg-yellow-50 rounded-[8px] font-medium  text-richblack-900 px-[12px] py-[8px] mt-7' >
    Sign In
   </button>


   </form>
  )
}

export default LoginForm