import React from "react";

function TodoItem(props) {
  const isComplete = props.todo.completed;
  
  return (
    <li>
      <div style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        Do: {props.todo.Do}
      </div>
      <input type="checkbox" checked={isComplete} onChange={props.toggleTodo} />
      <button onClick={props.deleteTodo}>Delete</button>
    </li>
  );
}


export default TodoItem;
