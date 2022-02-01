import React, { useState } from "react";
import './Addable.css';

function Addable(props){

    const [inputValue, setInputValue] = useState(props.text || "");

    return (
        <div className="addable" >
            <p className="addp">Add a Task</p>
            <form 
                className="addable-add"
                onSubmit={(event)=>{
                    event.preventDefault();
                    if(props.onSubmit) props.onSubmit(inputValue)
                }}>
                    <input autofocus 
                    type='text' 
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                    placeholder="Enter the task"/>
                    <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default Addable