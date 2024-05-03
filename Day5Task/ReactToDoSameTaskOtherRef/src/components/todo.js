import React from 'react'
import '../styles/todo.css'

export default function Todo({ id, title, description, completed, toggleCompleteTodo, editTodo, deleteTodo }) {
    let [edit, setEdit] = React.useState(false)
    let [newTitle, setNewTitle] = React.useState(title)
    let [newDesc, setNewDesc] = React.useState(description)
    return (
        <div className={completed ? "todo todo-complete" : "todo todo-pending"}>
            {edit && <input
                type="text" 
                name="todo-title" 
                id="todo-title" 
                className="todo-title" 
                value={newTitle} 
                onChange={e=>setNewTitle(e.target.value)}
                placeholder="title"
                autoFocus
            />}
            {edit && <input
                type="text"
                name="todo-desc"
                id="todo-desc"
                className="todo-desc"
                value={newDesc}
                onChange={e=>setNewDesc(e.target.value)}
                placeholder='description'
            />}
            {edit && <button onClick={()=>{
                editTodo(id, newTitle, newDesc)
                setEdit(!edit)
            }}>Save</button>}
            {!edit && <span>{title}</span>}
            {!edit && <span>{description}</span>}
            <select
                name={`status-${id}`}
                id={`status-${id}`}
                value={completed ? "complete" : "pending"}
                onChange={() => toggleCompleteTodo(id)}
            >
                <option value="complete">Complete</option>
                <option value="pending">Pending</option>
            </select>
            <div className="btns">
                <button onClick={()=>setEdit(!edit)}>{ !edit ? <i className="bi bi-pencil"></i> : <i className="bi bi-x-lg"></i>} {!edit ? "Edit" : "Cancel"}</button>
                <button onClick={()=>deleteTodo(id)}><i class="bi bi-trash"></i> Delete</button>
            </div>
        </div>
    )
}