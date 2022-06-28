import React, { useEffect, useState } from 'react'
import { AddToDo } from '../components/addToDo'
import Title from '../components/title'
import { auth, db } from '../firebase'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc,where, orderBy} from 'firebase/firestore'
import { IconFile } from '../components/icon'
import './todo.css'
import { onAuthStateChanged } from 'firebase/auth'

const TodoApp = () => {
    const [todos, setTodos]=useState([])
 const [user1, setUser] = useState({})

    useEffect(() => {
      let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("from db logged in current", currentUser);
        sessionStorage.setItem("data", currentUser.uid)
        setUser(currentUser)
      })
     
      const user= sessionStorage.getItem("data")
      console.log(user)
       const q = query(collection(db, "todos"),where('Uid', "==", user));
      // const q = query(collection(db, "todos"),where('email', "==", user));
            const unsub = onSnapshot(q, (QuerySnapshot) => {    
            let todoArray = [];
            QuerySnapshot.forEach((doc) => {
              todoArray.push({...doc.data(), id:doc.id})
            }); 
            setTodos(todoArray)
        })
      return () => unsub, unsubscribe()        
    }, [user1])
 
  
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
    console.log("edit",todo.id)
    }

    const toggleComplete = async (todo,) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed
        })
    }   

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    }
  return (
      <div>
          <div className='boxTodo'>
          <Title />
          </div>
          <div className='boxTodo1'>
              <AddToDo/>
      </div>
      <div className="boxTodo2">
        {todos.map((todo) => (
                        <IconFile key={todo.id} todo={todo} toggleComplete={toggleComplete}
                        handleDelete={handleDelete}
                    handleEdit={handleEdit}></IconFile> 
            ))}
      </div>

    </div>
  )
}

export default TodoApp