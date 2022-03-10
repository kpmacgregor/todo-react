import React from 'react';

function TodoInput(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text"></input>
            <button type="submit">+</button>
        </form>
    );
}

export default TodoInput;