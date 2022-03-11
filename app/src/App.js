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
      todoList: [],
      completedList: [],
    };
  }

  componentDidUpdate(props, state) {
    console.log(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: `task-list-id-${new Date().getTime()}`,
      completed: false,
      text: e.target.querySelector("input").value,
    };

    this.setState({ todoList: [...this.state.todoList, task] });
  }

  handleChecked(e) {
    // console.log(e.target.props);
    // e.preventDefault();
    let sourceList = "todoList",
      destinationList = "completedList";

    // e.target.checked is unreliable
    // we need to access the completed prop
    // to make this check
    if (!e.target.checked) {
      sourceList = "completedList";
      destinationList = "todoList";
    }
    const index = this.state[sourceList].findIndex((task) => {
      return task.id === e.target.id;
    });
    const task = this.state[sourceList][index];
    task.completed = !task.completed;

    const _sourceList = [...this.state[sourceList]];
    _sourceList.splice(index, 1);
    const _destinationList = [...this.state[destinationList], task];

    this.setState((state) => {
      const merge = {};
      merge[sourceList] = _sourceList;
      merge[destinationList] = _destinationList;
      return merge;
    });
    // this.setState({ destinationList: _destinationList });
  }

  handleUnchecked(e) {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>tasks</h1>
        </header>
        <TodoInput onSubmit={this.handleSubmit} />
        <TodoList
          todoList={this.state.todoList}
          onChecked={this.handleChecked}
        />
        <hr />
        <TodoList
          todoList={this.state.completedList}
          onChecked={this.handleChecked}
        />
      </div>
    );
  }
}

export default TodoApp;
