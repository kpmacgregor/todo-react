import React from "react";

function TaskInput(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text"></input>
      <button type="submit">+</button>
    </form>
  );
}

export default TaskInput;
