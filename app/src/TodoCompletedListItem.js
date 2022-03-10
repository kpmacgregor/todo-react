import TodoListItem from "./TodoListItem";

function TodoCompletedListItem(props) {
    const _props = Object.assign({}, props, { completed: true });
    return TodoListItem(_props);
}