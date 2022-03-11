import React from "react";

function TodoListItem(props) {
    return (
        <li className={props.completed ? 'completed' : 'not-completed'}>
            <input type="checkbox" id={props.id} onChange={props.onChecked}></input>
            <label htmlFor={props.id}>{props.value}</label>
            <button type="button">-</button>
        </li>
    )
}

export default TodoListItem;