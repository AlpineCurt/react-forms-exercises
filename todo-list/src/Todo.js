import React from "react";

const Todo = ({id, todo, handleRemoveTodo}) => {
    const remove = () => handleRemoveTodo(id);
    return (
        <li>
            {todo}
            <button onClick={remove}>X</button>
        </li>
    );
}

export default Todo;