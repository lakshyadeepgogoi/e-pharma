import React from 'react'
import signupImg from "../Component/Assets/authPhoto/signup.png"
import Template from '../Component/Auth/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Get medicine in one click with Plus and pills"
    desc1="Almost All Medicines We Take Are Generic!"
    desc2="Sign up to access your orders, special offers, health tips and more!"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}

export default Signup