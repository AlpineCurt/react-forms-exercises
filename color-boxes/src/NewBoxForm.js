import React, { useState } from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handeSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, key: uuid()});
        setFormData(INITIAL_STATE);
    }
    return (
        <div>
            <h3>Add a Box</h3>
            <form onSubmit={handeSubmit}>
                <label htmlFor="form-width">Width</label>
                <input
                    id="form-width"
                    type="text"
                    name="width"
                    placeholder="Width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="form-height">Height</label>
                <input
                    id="form-height"
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor="form-backgroundColor">Color</label>
                <input
                    id="form-backgroundColor"
                    type="text"
                    name="backgroundColor"
                    placeholder="Color"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;