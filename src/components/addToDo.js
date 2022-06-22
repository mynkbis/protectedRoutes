import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc, QuerySnapshot } from 'firebase/firestore'



export const AddToDo = () => {
    const [title, setTitle] = useState()
    const [todos, setTodos]=useState([])
  

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (QuerySnapshot) => {
            let todoArray = [];
            QuerySnapshot.forEach(); 
            todoArray.push({ ...doc.data(), id: doc.id });
            setTodos(todoArray)
        })
return()=>unsub        
},[])


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!title === "")
         
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
                   
            })
        console.log(db)
        setTitle("")
    }
  
    return (
      <>
            <form onSubmit={handleSubmit}>
                <div>
                <input type="text" placeholder="enter todo.." value={title} onChange={(e)=>setTitle(e.target.value) } />
                </div><div>
                    <button >onSubmit</button>
                </div>
            </form>  
          
   </>
  )
}
