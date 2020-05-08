import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

const initialTodo = [
  { id: 1, name: "Get out of bed, Wed Sep 13 2017", complete: false },
  { id: 2, name: "Brush teeth, Thu Sep 14 2017", complete: false },
  { id: 3, name: "Eat breakfast, Fri Sep 15 2017", complete: false }
];

function App() {
  const [todos, setTodos] = useState([initialTodo]);
  const todoName = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function markDone(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function addTodo(e) {
    const name = todoName.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoName.current.value = null;
  }

  function clearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} markDone={markDone} />
      <input ref={todoName} type="text" />
      <button onClick={addTodo}>Add ToDo</button>
      <button onClick={clearTodos}>Clear Completed ToDo</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
