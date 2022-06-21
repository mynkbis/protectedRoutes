import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"


const firebaseConfig = {

//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// }



  apiKey: "AIzaSyAPr4Q2hriL2NgN16gtI2MEm-7zvkSn2iY",
  authDomain: "react-protected-39d6e.firebaseapp.com",
  projectId: "react-protected-39d6e",
  storageBucket: "react-protected-39d6e.appspot.com",
  messagingSenderId: "402547108842",
  appId: "1:402547108842:web:b5be785a315ab3b6eb6093",
  measurementId: "G-PTBX1JH4CB"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);




// const app = firebase.initializeApp({
    
//      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// })

// export const auth = app.auth();

// export default app
