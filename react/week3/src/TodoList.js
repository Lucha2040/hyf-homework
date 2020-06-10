import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";

class TodoList extends React.Component {
  state = { todos: [] };

  async componentDidMount() {
    const url =
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(item => { 
      return this.addTodo(item.description, item.deadline) 
    })
    
  }
  
  addTodo = (todo, dueDate) => {
    const newTodo = {
      id: uuidv4(), 
      todo,  
      dueDate, 
      complete: false,
      isEdit: false,
    }; 
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  deleteTodo = (currentId) => {
    this.setState({
      todos: this.state.todos.filter((_todo, id) => currentId !== id),
    });
  };

  toggleTodo = (currentId) => {
    this.setState({
      todos: this.state.todos.map((todo, id) => {
        if (currentId === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  startEdit = (currentId) => {
    this.setState({
      todos: this.state.todos.map((editingTodo, id) => {
        if (currentId === id) {
          return {
            ...editingTodo,
            isEdit: !editingTodo.isEdit,
          };
        } else {
          return editingTodo;
        }
      }),
    });
  };

  editTodo = ({id, event}) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.map((editingTodo, id) => {
        if (editingTodo.id === id) {
            return editingTodo.id
          } else {
              return "No match"
          }
          })
        })}


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
              handleChange={() => this.editTodo(id)}
              editTodo={() => this.editTodo(id)}
            />
          ))}
        </ul>
        <Form addTodo={this.addTodo} todos={this.state.todos} />
      </div>
    );
  }
}


export default TodoList;
