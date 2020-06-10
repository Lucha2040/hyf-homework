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
        id= {props.todo.id}
        type="text"
        name="todo"
        value={props.todo.todo}
        onChange={(event) => {this.props.editTodo(event)}}
      />
      <label>Due Date:</label>
      <input
        type="date"
        name="dueDate"
        value={props.todo.dueDate}
        onChange={(event) => {this.props.editTodo(event)}}
      />
              
      <button
        onClick={(event) => {
          if (!this.props.todo) {
            alert("Please, insert something to do");
          } else {
            this.props.editTodo(event);
          }
        }}
      >
        Update
      </button>
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
      <ul style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        <li>{isEdit ? editingInput : renderedInput}</li>
      </ul>
    </SmallBorder>
  );
}
export default TodoItem;
