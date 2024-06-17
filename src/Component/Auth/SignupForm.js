import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Mobile: '',
    OTP: '',
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Account Created');
    const accountData = { ...formData };
    console.log(accountData); // You can send this data to your backend or use it as needed
    navigate('/dashboard');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* First Name and Last Name */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              className='border-2 rounded-[0.5rem] w-full p-[12px]'
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter first name'
              value={formData.firstName}
            />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              className='border-2 rounded-[0.5rem]  w-full p-[12px]'
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              placeholder='Enter last name'
              value={formData.lastName}
            />
          </label>
        </div>

        {/* Mobile Number */}
        <div className='mt-[20px]'>
          <label className='relative'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
              Enter Mobile Number <sup>*</sup>
            </p>
            <input
              className='rounded-[0.5rem] w-full p-[12px] border-2'
              required
              type='Number'
              name='Mobile'
              onChange={changeHandler}
              placeholder='Enter mobile number'
              value={formData.Mobile}
            />
          </label>
        </div>

        {/* OTP */}
        <div className='flex w-full gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
              Enter OTP <sup>*</sup>
            </p>
            <input
              className='rounded-[0.5rem] text-black w-full p-[12px] border-2'
              required
              type='text'
              name='OTP'
              onChange={changeHandler}
              placeholder='Enter OTP'
              value={formData.OTP}
            />
          </label>

          <label className='relative w-[30%] gap-x-2'>
            <button className='w-full bg-green-200 rounded-[8px] font-medium text-richblack-900 px-[8px] py-[6px] mt-7 border-2'>
              Confirm OTP
            </button>
          </label>
        </div>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7'>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
