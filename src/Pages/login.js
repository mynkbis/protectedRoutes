import React, { useState } from 'react'
import './login.css'
import { auth, db, } from "../firebase"
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
  const navigate = useNavigate();
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
      if(user)navigate("../profile")
    // ...
  }).catch((error) => {
    // Handle Errors here.
       alert("Please try again")
  });
}

  const handleChange = (e) => {
 // console.log("ufyifyfff", e.target.value, e.target.name)
  setFValues({...fValues, [e.target.name]:e.target.value})
  }


auth.onAuthStateChanged(user => {
    const username = document.getElementById('username');
    if (user) {
        db.collection('users').doc(user.uid).get().then((snapshot) => {
             console.log("from new state",snapshot.data().Name);
            username.innerText = snapshot.data().Name;
        })
    }
    else {
        console.log("from new state 2",'user is not signed in to retrive username');
    }
})

  const handleLogin = async () => {
   console.log("submiit",fValues )
    try {
      const user = await signInWithEmailAndPassword(auth, fValues.loginEmail, fValues.loginPassword)   
      if(user)navigate("../profile")
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
        
          <button onClick={(e) => handleLogin()}>Login</button>
          <button onClick={() => { googleLogin() }}>Google Login</button>
          <p className="renderBox"><Link to={'../reset'} style={{ color: 'white' }} >Forget password!</Link></p>
            <p><Link to ={'../signup'}style={{ color: '#FFF' }} >New User? Click here</Link></p>
           </div>
          </div>
      </div>
  )
}

export default Login;