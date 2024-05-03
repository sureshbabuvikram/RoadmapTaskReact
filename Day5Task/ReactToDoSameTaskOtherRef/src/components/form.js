import React from 'react'
import '../styles/form.css'

export default function Form({ addTodo }) {
    let [title, setTitle] = React.useState('')
    let [desc, setDesc] = React.useState('')
    return (
        <div className="form">
            <input
                type="text" 
                name="todo-title" 
                id="todo-title" 
                className="todo-title" 
                value={title} 
                onChange={e=>setTitle(e.target.value)}
                placeholder="title"
            />
            <input
                type="text"
                name="todo-desc"
                id="todo-desc"
                className="todo-desc"
                value={desc}
                onChange={e=>setDesc(e.target.value)}
                placeholder='description'
            />
            <button onClick={()=>{
                addTodo(title, desc)
                setTitle('')
                setDesc('')
            }}>Add</button>
        </div>
    )
}