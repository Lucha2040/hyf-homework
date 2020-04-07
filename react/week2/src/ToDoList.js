import React from "react";
import TodoItem from "./TodoItem";
import uuidv4 from "uuid/v4"

class ToDoList extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        Do: "Get out of bed",
        complete: false,
      },
      {
        id: uuidv4(),
        Do: "Brush teeth",
        complete: false,
      },
      {
        id: uuidv4(),
        Do: "Eat breakfast",
        complete: false,
      },
    ],
    todoDo: " ",
  };

  addTodo = (todoDo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuidv4(), name: todoDo, completed: false },
      ],
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
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    if (this.state.todos.length === 0) return (
   <div>
    <p>No items</p>
    <button onClick={this.addTodo}>Add Todo</button>
    </div>
    ) 
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, id) => (
            <TodoItem
              todo={todo}
              key={id}
              deleteTodo={() => this.deleteTodo(id)}
              toggleTodo={() => this.toggleTodo(id)}
            />
          ))}
        </ul>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    )};
  }



export default ToDoList;
