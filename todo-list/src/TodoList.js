import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const Todolist = () => {
    const INITIAL_STATE = [
        {key: uuid(), todo: "Cook Tofu"},
        {key: uuid(), todo: "Eat Tofu"}
    ]
    const [items, setItems] = useState([]);
    const addTodo = (newItem) => {
        setItems(items => [...items, {
            key: uuid(),
            todo: newItem.todo
        }]);
    }
    const removeTodo = (id) => {
        setItems(items.filter(item => item.key !== id));
    }
    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            <h3>Todos:</h3>
            <ul className="TodoList">
                {items.map(({key, todo}) => (
                    <Todo id={key }key={key} todo={todo} handleRemoveTodo={removeTodo}/>
                ))}
            </ul>
        </>
    )
}

export default Todolist;