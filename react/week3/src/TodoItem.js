import React from "react";

function SmallBorder(props) {
  return <div className={`SmallBorder ${props.color}`}>{props.children}</div>;
}

function TodoItem(props) {
  const isComplete = props.todo.complete;
  return (
    <SmallBorder>
        <li style={{ textDecoration: isComplete ? "line-through" : "none" }}>
          <li>
          <input
              type="checkbox"
              checked={isComplete}
              onChange={props.toggleTodo}
            />
            To-Do: {props.todo.todo} || Date: {props.todo.dueDate}
            <button onClick={props.deleteTodo}>Delete</button>
            <button onClick={props.editTodo}>Edit</button>
          </li>
          </li>
    </SmallBorder>
  );
}

export default TodoItem;
