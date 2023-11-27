import React from 'react'
import './LoginSignup.css'
 const LoginSignup = () => {
  return (
    <div className='loginignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>SUBMIT</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="Loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>BY continuing,i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup