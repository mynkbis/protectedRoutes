import React, { useState } from 'react'
import CheckCircle from "@mui/icons-material/CheckCircle"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

export const Icon = ({
    todo,toggleComplete,handleDelete,handleEdit
}) => {
const[newTitle, setNewTitle]=useState(todo.title)
    
    
    const handleChange = (e) => {
        // e.preventDefault();
        // if (todo.completed === true) {
        //     setNewTitle(todo.title);
        // } else {
        //     todo.title = ""
        //     setNewTitle(e.target.value);
        // }
}
  return (
      <>
          <div>
              <input style={{ textDecoration: todo.completed && "line-through" }} type="text" 
            //   once to todo is done it will strikeout the todo
                  value={todo.title === "" ? newTitle : todo.title} onChange={(e) => handleChange()} />
              {/* if the title is empty return the new one */}
          </div>
          <button onClick={() => toggleComplete(todo)}><CheckCircle id="i" /></button>
          <button onClick={() => handleEdit(todo, newTitle)}><EditIcon id="i" /></button>
           <button onClick={()=>handleDelete(todo.id)}><DeleteIcon id="i"/></button>
  </>
  )
}
