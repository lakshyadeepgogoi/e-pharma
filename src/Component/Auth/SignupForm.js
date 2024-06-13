import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'



const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();

    const[formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const[showPassword, setShowPassword] = useState(false)

    const[accountType, setAccountType] = useState("student")

    function changeHandler(event){
        setFormData( (prevData) =>(
            {             ...prevData,
                [event.target.name]:event.target.value}
         
        ))
}

function sumbitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("password do not same")
            return
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData={
            ...formData
        }
        navigate("/dashboard")
        
}


  return (

    <div>

       


        <form onSubmit={sumbitHandler} >
            {/* firstname and lastname */}
        <div className='flex gap-x-4 mt-[20px]'> 
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className=' text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type='text' name="firstName" onChange={changeHandler} placeholder='enter first name' value={formData.firstName}/>
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup  className=' text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type='text' name="lastName" onChange={changeHandler} placeholder='enter last name' value={formData.lastName}/>
            </label>
        </div>


           {/* email address */}
           <div className='mt-[20px]'>
           <label  className='relative '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type='email' name="email" onChange={changeHandler} placeholder='enter email' value={formData.email}/>
        </label>
           </div>
       


        {/* create password and confirm password */}
        <div className='flex w-full gap-x-4 mt-[20px]'>
            <label  className=' w-full relative '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >create Password<sup>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type={showPassword?("text") : ("password")} name="password" onChange={changeHandler} placeholder='enter password' value={formData.password}/>


                <span   className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>setShowPassword( (prev) => !prev)}>
                {showPassword?( <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> ):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
           
            <label  className='relative w-full gap-x-4 '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm Password<sup>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' required type={showPassword? ("text") : ("password")} name="confirmPassword" onChange={changeHandler} placeholder='confirm password' value={formData.confirmPassword}/>
                
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword( (prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>


        </div>


        <button className= 'w-full bg-yellow-50 rounded-[8px] font-medium  text-richblack-900 px-[12px] py-[8px] mt-7'>
            create Account
        </button>
            
        </form>
    </div>
  )
}

export default SignupForm