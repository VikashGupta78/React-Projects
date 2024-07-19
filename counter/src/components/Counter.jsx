import React from "react";
import './Counter.css';
import { useState } from "react";

function Counter(){
    const [value, setValue] = useState(0);
    function negHandler(){
        setValue(value-1);
    }
    function posHandler(){
        setValue(value+1);
    }
    function resetHandler(){
        setValue(0);
    }
    return(
        <div className="main">
            <h2>Increement & Decreement</h2>
            <div className="counter">
                <button onClick={negHandler} className="negative">-</button>
                <div className="value">{value}</div>
                <button onClick={posHandler} className="positive">+</button>
            </div>
            <button onClick={resetHandler} className="reset-btn">Reset</button>
        </div>
    )
}

export default Counter;