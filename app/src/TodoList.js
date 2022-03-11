import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <ul className="todoList">
      {props.todoList.map((task) => {
        return (
          <TodoListItem
            key={task.id}
            value={task.text}
            id={task.id}
            onChecked={props.onChecked}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
