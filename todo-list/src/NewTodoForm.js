import React, { useState } from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData, key: uuid()})
        setFormData(INITIAL_STATE);
    }
    return (
        <>
            <h3>Add a Todo</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form-todo">New Todo</label>
                <input
                    id="form-todo"
                    type="text"
                    name="todo"
                    placeholder="Todo"
                    value={formData.todo}
                    onChange={handleChange}
                />
                <button>Add Todo</button>
            </form>
        </>
    )
}

export default NewTodoForm;