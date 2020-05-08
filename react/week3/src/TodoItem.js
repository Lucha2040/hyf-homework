import React from "react";

function SmallBorder(props) {
  return <div className={`SmallBorder ${props.color}`}>{props.children}</div>;
}




function TodoItem(props) {
  const isComplete = props.todo.complete;
  const isEdit = props.todo.isEdit;
  let editingInput = (
    <>
      <label>Task to do</label>
      <input
        type="text"
        name="todo"
        value={props.todo.todo}
        onChange={props.handleChange}
      />
      <label>Due Date:</label>
      <input
        type="date"
        name="dueDate"
        value={props.todo.dueDate}
        onChange={props.todo.handleChange}
      />
      <button onClick={props.isEdit}>Update</button>
      </>
  );
  const renderedInput = (
    <>
      <input type="checkbox" checked={isComplete} onChange={props.toggleTodo} />
      To-Do: {props.todo.todo} || Date: {props.todo.dueDate}
      <button onClick={props.deleteTodo}>Delete</button>
      <button onClick={props.startEdit}>Edit</button>
    </>
  );

  return (
    <SmallBorder>
      <li style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        <li>{isEdit ? editingInput : renderedInput}</li>
      </li>
    </SmallBorder>
  );
}

export default TodoItem;
