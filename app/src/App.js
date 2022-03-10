import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>tasks</h1>
      </header>
      <TodoInput />
      <TodoList />
      <TodoCompletedList />
      <TodoFooter />
    </div>
  );
}

export default App;
