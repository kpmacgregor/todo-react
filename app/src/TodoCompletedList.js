import React from "react";
import TodoCompletedListItem from "./TodoCompletedListItem";

function TodoCompletedList(props) {
  return (
    <ul className="todoCompletedList">
      {props.completedList.map((task) => {
        return (
          <TodoCompletedListItem key={task.id} value={task.text} id={task.id} />
        );
      })}
    </ul>
  );
}

export default TodoCompletedList;
