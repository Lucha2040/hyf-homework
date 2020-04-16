import React from 'react';
import Counter from './Counter.js'
import TodoList from './TodoList.js';


function App() {
  return (
    <div className="Todo-container">
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
