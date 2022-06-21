import React from 'react'
import './login.css'
const Login = () => {
  return (
      <div>
          <p>Login</p>    
          <div className='loginButton'>Login
      <div className='loginButtonBox'>
        <div>
          <input placeholder='UserName...'/>
        </div>
          <div><input placeholder='Password...' /></div>
          <p>Forget Password?</p>
          {/* <Button/> */}
         
        </div>
          </div>
      </div>
  )
}

export default Login;