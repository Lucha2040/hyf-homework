import React from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form'


class TodoList extends React.Component {
  state = { todos: [] }

handleChange = (id, event) => {
    this.setState({[event.target.name]: event.target.value });    
  };

addTodo = (todo, dueDate) => {
    const newTodo = {id: uuidv4(), todo, dueDate, complete: false, isEdit: false}
    this.setState({
        todos: [
            ...this.state.todos,
            newTodo 
        ]
    })
}; 

deleteTodo = (currentId) => {
    this.setState({
        todos: this.state.todos.filter((_todo, id) => currentId !== id)
    });
}

toggleTodo = (currentId) => {
    this.setState({
        todos: this.state.todos.map((todo, id) => {
            if(currentId === id) {
                return {
                    ...todo, 
                    complete: !todo.complete
                };
            } else {
                return todo
            }
        })
    })
};

startEdit = (currentId) => {
    this.setState({
        todos: this.state.todos.map((todo, id) => {
            if(currentId === id) {
                return {
                    ...todo, 
                    isEdit: !todo.isEdit
                };
            } else {
                return todo
            }  
        })
    })
};

editTodo = (id, ) => {
    this.setState()
}

render() {
    return (
        <div>
            <ul>
                {this.state.todos.map((todo, id, dueDate) => (
                    <TodoItem
                    key={id}
                    todo={todo}
                    dueDate={dueDate}
                    deleteTodo={() => this.deleteTodo(id)}
                    toggleTodo={() => this.toggleTodo(id)}
                    startEdit={() => this.startEdit(id)}
                    />
                ))}
            </ul>
            <Form addTodo={this.addTodo}/>
        </div>
    )
}
}


export default TodoList