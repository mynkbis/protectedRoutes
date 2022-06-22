import React, { useState } from 'react'
import './login.css'
import { auth, } from "../firebase"
import { signInWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../components/validation'
import { getAuth, signInWithPopup } from "firebase/auth"

const Login = () => {
  const [fValues, setFValues] = useState({
    loginEmail: "",
    loginPassword:""
})

  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();


  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    
  
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

  const handleChange = (e) => {
 // console.log("ufyifyfff", e.target.value, e.target.name)
  setFValues({...fValues, [e.target.name]:e.target.value})
  }


  const handleLogin = async () => {
   console.log("submiit",fValues )
    try {
      const user = await signInWithEmailAndPassword(auth, fValues.loginEmail, fValues.loginPassword)   
      Navigate("home")
    // sessionStorage.setItem('email', auth.user.email)
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
  
  const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


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
        
          <button onClick={(e) => handleLogin()}>Login</button>
          <button onClick={() => { googleLogin() }}>Google login</button>
          <p><Link to={'../reset'}>Forget password!</Link></p>
            <p><Link to ={'../signup'}>New User? Click here</Link></p>
           </div>
          </div>
      </div>
  )
}

export default Login;