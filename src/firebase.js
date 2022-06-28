import firebase from 'firebase/app';

import {initializeApp}  from "firebase/app";
import  {getAuth, onAuthStateChanged} from "firebase/auth"
import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';


const firebaseConfig = {
  

 apiKey: "AIzaSyB6e6S1yr96REQSLEONdZ0skNYV50irvK4",
  authDomain: "try41-9a451.firebaseapp.com",
  projectId: "try41-9a451",
  storageBucket: "try41-9a451.appspot.com",
  messagingSenderId:"426681994558",
  appId: "1:426681994558:web:a58133765b8c75833bb06f",

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
export const db=getFirestore(app)
export const auth = getAuth(app);

console.log(db)


 const getNote = async (id) => {
    const noteSnapshot = await getDoc(doc(db, 'todos', id  ));
   if (noteSnapshot.exists()) {
      
  console.log("data fro DB",noteSnapshot.data())
     return noteSnapshot.data();
     
   } else {
             console.log("Note doesn't exist");
   }
   
};

getNote(
  "NCoeee8dCG1rgWlbFWD2");

  // let unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  // {
  //  const user=currentUser     
  // return () => unsubscribe()})

  // console.log(unsubscribe.user)