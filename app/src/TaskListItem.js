import React from "react";

function TaskListItem(props) {
  return (
    <li className={props.completed ? "completed" : "not-completed"}>
      <input
        type="checkbox"
        id={props.id}
        onChange={props.onChange}
        checked={props.completed}
      ></input>
      <label htmlFor={props.id}>{props.value}</label>
      <button data-for={props.id} type="button" onClick={props.onDelete}>
        -
      </button>
    </li>
  );
}

export default TaskListItem;
