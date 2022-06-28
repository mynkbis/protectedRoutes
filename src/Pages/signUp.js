import React, { useState } from 'react'
import './signUp.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase"
import Validation from '../components/validation'
import { Link, useNavigate } from 'react-router-dom'


const SignUp = () => {
  const [fValues, setFValues] = useState({
    registerUser: "",
    registerPassword:""
  })
  const  [errors, setErrors]=useState({})
  
const navigate=useNavigate()


  const handleChange1 = (e) => {
    setFValues({ ...fValues, [e.target.name]: e.target.value })
   
  }

  const handleSubmit = async (e) => {
  try {
      const user = await createUserWithEmailAndPassword(auth, fValues.registerUser, fValues.registerPassword).then(cred => {
        console.log("new value",cred)
        // return db.collection('user').doc(cred.user.uid)
      })
    console.log(user) 
      // in built method for registering or signup
       navigate('../home')   
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
          <button onClick={(e) => handleSubmit()}>SignUp</button>
           <p><Link to ={'../login'} style={{ color: '#FFF' }}> Registered User? click here!</Link></p>
          </div>
          </div>
      </div>
  )
}

export default SignUp;