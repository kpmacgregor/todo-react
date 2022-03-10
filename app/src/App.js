import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
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
  }

  render() {
   return (
      <div className="App">
        <header className="App-header">
          <h1>tasks</h1>
        </header>
        <TodoInput onSubmit={this.handleSubmit} />
       <TodoList todoList={this.state.todoList} />
      {/*<TodoCompletedList />
      <TodoFooter /> */}
      </div>
    )
  };
}

export default TodoApp;
