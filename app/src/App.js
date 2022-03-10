import React from 'react';
import TodoInput from './TodoInput';
import "./App.css";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>tasks</h1>
      </header>
      <TodoInput onSubmit={handleSubmit} />
      {/* <TodoList />
      <TodoCompletedList />
      <TodoFooter /> */}
    </div>
  );
}

export default App;
