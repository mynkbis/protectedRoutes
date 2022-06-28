import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import "./icon.css"
  import { onAuthStateChanged } from 'firebase/auth'

export const AddToDo = () => {

    const [title, setTitle] = useState()
    
const [user, setUser] = useState({})
   useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  {
    setUser(currentUser)
    })
  return () => unsubscribe()
}, [])



     const handleSubmit = async (e)=>{
         e.preventDefault();
            if (title!== "")
                await addDoc(collection(db, "todos"), {
                    title,
                    completed: false,
                  email: `${user.email}`,
                  Uid: `${user.uid}`
                    })
                      setTitle("")
            //   console.log("data in db",title)
     }
          
  
    return (
        <>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                    
                <input type="text" placeholder="enter todo.." defaultValue={title} onChange={(e)=>setTitle(e.target.value) } />
                </div><div>
                    <button className='buttonBox' >Add</button>
                 
                </div>
            </form>

            
            </div>
          
   </>
  )
}
