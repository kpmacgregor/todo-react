import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    return (
        <ul className="todoList">
            {props.todoList.map((task, index) => {
                return <TodoListItem key={index} value={task} id={`todo-list-item-${index}`} />
            })}
        </ul>
    );
}

export default TodoList;