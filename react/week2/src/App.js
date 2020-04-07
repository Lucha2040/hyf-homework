import React from "react";
import Counter from "./Counter";
import ToDoList from "./ToDoList";

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Counter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
