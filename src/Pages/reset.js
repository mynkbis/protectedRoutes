import React, { useState } from "react";
import { } from "firebase/auth";

import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase'
import '../Pages/reset.css'
function Reset() {
  const [email, setEmail] = useState("");

 
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
    <div className="resetButton">Reset Password
      <div className="resetButtonBox">
       <div>
              <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Registered email...."
                  />
                  </div>
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
          submit
        </button>
      
         <h4> Don't have an account?<Link to="../signup" style={{ color: '#FFF' }}>Register</Link> now.</h4> 
        
      </div>
    </div>
  );
}
export default Reset;
