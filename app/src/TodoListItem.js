import React from "react";

function TodoListItem(props) {
    return (
        <li>
            <input type="checkbox" id={props.id}></input>
            <label htmlFor={props.id}>{props.value}</label>
            <button type="button">-</button>
        </li>
    )
}

export default TodoListItem;