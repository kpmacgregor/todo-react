import React from 'react';
import TodoInput from './TodoInput';
import "./App.css";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      todoList: [],
      completedList: [],
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const value = e.target.querySelector('input').value;
    this.setState({ todoList: [...this.state.todoList, value] });
    console.log(this.state.todoList);
  }

  render() {
   return (
      <div className="App">
        <header className="App-header">
          <h1>tasks</h1>
        </header>
        <TodoInput onSubmit={this.handleSubmit} />
        {/* <TodoList />
      <TodoCompletedList />
      <TodoFooter /> */}
      </div>
    )
  };
}

export default TodoApp;
