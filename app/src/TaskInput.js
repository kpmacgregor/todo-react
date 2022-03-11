import React from "react";

function TaskInput(props) {
  return (
    <form className="task-add-form" onSubmit={props.onSubmit}>
      <input className="task-add-input" type="text"></input>
      <button className="task-add-button" type="submit">
        +
      </button>
    </form>
  );
}

export default TaskInput;
