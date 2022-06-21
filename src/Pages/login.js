import React, { useState } from 'react'
import './login.css'
import { auth, } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import Validation from '../components/validation'


const Login = () => {
  const [fValues, setFValues] = useState({
    loginEmail: "",
    loginPassword:""
})

  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();


  const handleChange = (e) => {
 // console.log("ufyifyfff", e.target.value, e.target.name)
  setFValues({...fValues, [e.target.name]:e.target.value})
  }


  const handleLogin = async () => {
   console.log("submiit",fValues )
    try {
      const user = await signInWithEmailAndPassword(auth, fValues.loginEmail, fValues.loginPassword)   
      Navigate("./profile")
   
           // using inbuit method of firebase fr signing in. 
      console.log("user loged in is ", user)
    } catch (error) {
      setErrors(Validation(fValues));
      console.log(error.message)
    }  
    setFValues({
   loginEmail: "",
    loginPassword:""
 })
 }
  return (
      <div>
          <p>Login</p>    
          <div className='loginButton'>Login
      <div className='loginButtonBox'>
        <div>
            <input type='email' name="loginEmail" placeholder='Email' defaultValue={fValues.loginEmail}
              onChange={(e) => handleChange(e)} />
            {errors.email && <p>{ errors.email}</p>}
        </div>
          <div><input type='password' name="loginPassword" placeholder='Password' defaultValue={fValues.loginPassword}
            onChange={(e) => handleChange(e)} />
           {errors.password && <p>{ errors.password }</p>}</div>
          <p>Forget Password?</p>
   <button onClick={(e)=>handleLogin()}>Login</button>
         
        </div>
          </div>
      </div>
  )
}

export default Login;