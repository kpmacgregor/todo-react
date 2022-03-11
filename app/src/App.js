import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
// import TodoCompletedList from "./TodoCompletedList";

import "./App.css";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.state = {
      taskList: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: `task-list-id-${new Date().getTime()}`,
      completed: false,
      text: e.target.querySelector("input").value,
    };

    this.setState({ taskList: [...this.state.taskList, task] });
  }

  handleChecked(e) {
    const _id = e.target.id;
    const index = this.state.taskList.findIndex((task) => task.id === _id);
    const task = { ...this.state.taskList[index] };
    task.completed = !task.completed;
    const _taskList = [...this.state.taskList];
    _taskList.splice(index, 1, task);
    this.setState({
      taskList: _taskList,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>tasks</h1>
        </header>
        <TodoInput onSubmit={this.handleSubmit} />
        <TodoList
          taskList={this.state.taskList.filter((task) => !task.completed)}
          onChecked={this.handleChecked}
        />
        <hr />
        <TodoList
          taskList={this.state.taskList.filter((task) => task.completed)}
          onChecked={this.handleChecked}
        />
      </div>
    );
  }
}

export default TodoApp;
