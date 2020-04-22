import React from "react";

function SmallBorder(props) {
  return <div className={`SmallBorder ${props.color}`}>{props.children}</div>;
}

function TodoItem(props) {
  const isComplete = props.todo.complete;
  const isEdit = props.todo.isEdit;
  const editingInput = (
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
        // value={this.state.dueDate} //
        // onChange={this.handleChange}
      />
      {/* <button onClick={}>Update</button> */}
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