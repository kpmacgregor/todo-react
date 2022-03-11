import React from "react";

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   // componentDidUpdate() {
//   //   this.handleChange
//   // }

//   handleChange(e) {
//     this.props.onChange();
//   }

//   render() {
//     return (
//       <li className={props.completed ? "completed" : "not-completed"}>
//         <input type="checkbox" id={props.id} onChange={props.onChecked} checked={this.props.}></input>
//         <label htmlFor={props.id}>{props.value}</label>
//         <button type="button">-</button>
//       </li>
//     );
//   }
// }

function TodoListItem(props) {
  return (
    <li className={props.completed ? "completed" : "not-completed"}>
      <input
        type="checkbox"
        id={props.id}
        onChange={props.onChecked}
        checked={props.completed}
      ></input>
      <label htmlFor={props.id}>{props.value}</label>
      <button type="button">-</button>
    </li>
  );
}

export default TodoListItem;
