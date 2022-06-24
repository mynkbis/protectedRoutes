import React, { useEffect, useState } from 'react'
import { AddToDo } from '../components/addToDo'
import Title from '../components/title'
import { db } from '../firebase'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc} from 'firebase/firestore'
import { IconFile } from '../components/icon'
import './todo.css'

const TodoApp = () => {
    const [todos, setTodos]=useState([])

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (QuerySnapshot) => {    
            let todoArray = [];
            QuerySnapshot.forEach((doc) => {
                 todoArray.push({ ...doc.data(), id: doc.id });
            }); 
           
            setTodos(todoArray)
        })
return()=>unsub        
    }, [])
  
  
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