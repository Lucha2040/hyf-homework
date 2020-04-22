import React from 'react';
import Counter from './Counter.js'
import TodoList from './TodoList.js';
import TodosFetcher from './TodosFetcher.js'

function App() {
  return (
    <div className="Todo-container">
      <Counter />
      <TodoList />
      {/* <TodosFetcher /> */}
    </div>
  );
}

export default App;
