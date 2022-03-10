import React from "react";

function TodoList(props) {
    return (
        <ul className="todoList">
            {props.todoList.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    );
}

export default TodoList;