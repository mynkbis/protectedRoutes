import React, { useState } from 'react'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import './icon.css'

export const IconFile = (
    {todo,
    toggleComplete,
    handleDelete,
    handleEdit }) => {
    
    const[newTitle, setNewTitle]=useState(todo.title)    // for storing the todo title
        
    const handleChange = (e) => {
        e.preventDefault(e)
      if (todo.completed === true) {
            console.log("new title entered is", newTitle)
            setNewTitle(todo.title);
            
        } else {
            todo.title = ""
            setNewTitle(e.target.value); 
        }}
    return (
        <>
          <div>
              <input style={{ textDecoration: todo.completed && "line-through" }} type="text" 
            //   once to todo is done it will strikeout the todo
                  defaultValue={todo.title === "" ? newTitle : todo.title} onChange={(e) => handleChange(e)} />
              {/* if the title is empty return the new one */}
        </div>
        
        {/* <button onClick={() => toggleComplete(todo)}><CheckCircleIcon id="i" /></button> */}
         <button className='buttonBox' onClick={() => toggleComplete(todo)}>S</button>
            {/* <button onClick={() => handleEdit(todo, newTitle)}><EditIcon id="i" /></button>
        <button onClick={() => handleDelete(todo.id)}><DeleteIcon id="i" /></button> */}
         <button className='buttonBox' onClick={() => handleEdit(todo, newTitle)}>E</button>
            <button className='buttonBox' onClick={() => handleDelete(todo.id)}>D</button>
  </>
  )
}
