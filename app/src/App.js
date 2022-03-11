import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import "./App.css";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      taskList: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const task = {
      id: `task-list-id-${new Date().getTime()}`,
      completed: false,
      text: input.value,
    };

    this.setState({ taskList: [...this.state.taskList, task] });
    input.value = "";
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

  handleDelete(e) {
    const _id = e.target.dataset.for;
    const index = this.state.taskList.findIndex((task) => task.id === _id);
    const _taskList = [...this.state.taskList];
    _taskList.splice(index, 1);
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
          onDelete={this.handleDelete}
        />
        <hr />
        <TaskList
          taskList={this.state.taskList.filter((task) => task.completed)}
          onChange={this.handleChange}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default TodoApp;
