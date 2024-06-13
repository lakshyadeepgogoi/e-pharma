import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Your Name <span>*</span></label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone/Mobile <span>*</span></label>
          <input 
            type='text' 
            name='phone' 
            id='phone' 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <button className='mainbutton1' type='submit'>Save Changes</button>
      </form>
    </div>
  );
}

export default AccountSettings;
