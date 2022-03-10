import React from "react";
import TodoCompletedListItem from "./TodoCompletedListItem";

function TodoCompletedList(props) {
    return (
        <ul className="todoCompletedList">
            {props.completedList.map((task, index) => {
                return <TodoCompletedListItem key={index} value={task} id={`todo-completed-list-item-${index}`} />
            })}
        </ul>
    );
}

export default TodoCompletedList;