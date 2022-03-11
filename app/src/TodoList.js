import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <ul className="taskList">
      {props.taskList.map((task) => {
        return (
          <TodoListItem
            key={task.id}
            value={task.text}
            id={task.id}
            onChecked={props.onChecked}
            completed={task.completed}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
