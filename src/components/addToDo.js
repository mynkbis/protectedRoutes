import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import "./icon.css"

export const AddToDo = () => {
    const [title, setTitle] = useState()
  


     const handleSubmit = async (e)=>{
            e.preventDefault();
            if (title!== "")
                await addDoc(collection(db, "todos"), {
                    title,
                    completed: false,
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
