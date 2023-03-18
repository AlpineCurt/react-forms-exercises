import React from "react";
import "./Box.css"

const Box = ({id, width="200px", height="100px", backgroundColor="indigo", handleRemoveBox}) => {
    const remove = () => handleRemoveBox(id);
    return (
        <div className="Box">
            <div className="Box-box" style={{
                width,
                height,
                backgroundColor
            }}>
            </div>
            <button onClick={remove} className="Box-btn">X</button>
        </div>
    )
}

export default Box;