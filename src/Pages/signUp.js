import React, { useState } from 'react'
import './signUp.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase"
import Validation from '../components/validation'
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [fValues, setFValues] = useState({
    registerUser: "",
    registerPassword:""
  })
  const  [errors, setErrors]=useState({})
  
  // const [registerUser, setRegisterUser] = useState('')
  // const [registerPassword, setRegisterPassword]=useState('')

  const handleChange1 = (e) => {
    setFValues({ ...fValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
    const user = await createUserWithEmailAndPassword(auth, fValues.registerUser, fValues.registerPassword)
    console.log(user) 
      // in built method for registering or signup
  }
    catch (error) {
      setErrors(Validation(fValues));
console.log(error.message)      
    }    
    setFValues({
    registerUser: "",   // clearing the fields
    registerPassword: ""
    })
}
  return (
      <div>
          <p>SignUp</p>    
          <div className='SignupBox'>SignUp
      <div className='SignupBox2'>
        <div>
            <input type="email" name="registerUser" placeholder='Email' defaultValue={fValues.registerUser}
              onChange={(e) => handleChange1(e)} />
            {errors.email && <h5>{errors.email}</h5>}
        </div>
          <div><input type="password" name="registerPassword" defaultValue={fValues.registerPassword}
            placeholder='Password' onChange={(e) => handleChange1(e)} />
           {errors.password && <h5>{errors.password}</h5>}</div>
          
          <p><Link to ={'../login'}>Already Registered!</Link></p>
          <button onClick={(e) => handleSubmit()}>SignUp</button>
         
        </div>
          </div>
      </div>
  )
}

export default SignUp;