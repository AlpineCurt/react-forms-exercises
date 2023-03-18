import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";

const BoxList = () => {
    const INITIAL_STATE = [
        {key: uuid(), width: "200px", height: "100px", backgroundColor: "aqua"},
        {key: uuid(), width: "400px", height: "75px", backgroundColor: "peachpuff"}
    ]
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {
                                        key: uuid(),
                                        width: `${newBox.width}px`,
                                        height: `${newBox.height}px`,
                                        backgroundColor: newBox.backgroundColor
                                    }]);
    }
    const removeBox = (id) => {
        setBoxes(boxes.filter((box) => box.key !== id));
    }
    return (
        <>
            <NewBoxForm addBox={addBox}/>
            <div className="BoxList">
                {boxes.map(({key, width, height, backgroundColor}) => (
                    <Box
                        id={key}
                        key={key}
                        width={width}
                        height={height}
                        backgroundColor={backgroundColor}
                        handleRemoveBox={removeBox}
                    />
                ))}
            </div>
        </>
    )
}

export default BoxList;