import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    return (
        <ul className="todoList">
            {props.todoList.map((task, index) => {
                return <TodoListItem key={task.id}
                    value={task.text}
                    id={task.id}
                    onChecked={props.onChecked} />
            })}
        </ul>
    );
}

export default TodoList;