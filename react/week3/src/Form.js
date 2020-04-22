import React, { Component } from "react";

export default class Form extends Component {
  state = { todo: " ", dueDate: " " };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });    
  };

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { addTodo } = this.props;
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!this.state.todo) {
            alert("Please, insert something to do");
          } else {
            addTodo(this.state.todo, this.state.dueDate);
            this.setState({
              todo: " ",
              dueDate: " "
            });
          }
        }}
      >
        <label>
          Task to do
        </label>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
        <label>
          Due Date:
          </label>
          <input type="date" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} />
        <br></br>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
