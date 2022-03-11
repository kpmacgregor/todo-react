import React from "react";
import TaskListItem from "./TaskListItem";

function TaskList(props) {
  return (
    <ul className="taskList">
      {props.taskList.map((task) => {
        return (
          <TaskListItem
            key={task.id}
            value={task.text}
            id={task.id}
            onChange={props.onChange}
            completed={task.completed}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
