import React from 'react'
import Todo from './Todo'


export default function TodoList({ todos, markDone }) {
    return (
     todos.map(todo => {
         return <Todo key={todo.id} markDone={markDone} todo={todo} />
     })
     
    )
}
