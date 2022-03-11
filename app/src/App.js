import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import "./App.css";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
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
        <TaskInput onSubmit={this.handleSubmit} />
        <TaskList
          taskList={this.state.taskList.filter((task) => !task.completed)}
          onChange={this.handleChange}
        />
        <hr />
        <TaskList
          taskList={this.state.taskList.filter((task) => task.completed)}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoApp;
