import React from 'react'

export default function Todo( { todo, markDone }) {
    function clicker() {
        markDone(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={clicker} />
            {todo.name}
            {todo.date}
            </label>
            
        </div>
    )
}
