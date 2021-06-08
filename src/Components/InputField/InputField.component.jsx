import './InputField.styles.css';
import React,{useState} from 'react';

import { uuid } from 'uuidv4';

const InputField = ({category,addTask}) => {
    const [title, setTitle] = useState("");
    
    const onInputChange = event => {
        event.preventDefault();
        setTitle(event.target.value);
    }
    const resetTitle = () => {
        setTitle("");
    }
    return(
        <div className="inputField">
            <hr />
            <input 
            data-test='newTask' 
            placeHolder="Add New Task"
            type="text" value={title} 
            onChange={(event) => onInputChange(event)}
            />

            <input
            data-test='submitButton' 
            type="submit" onClick={() => {
                addTask({title,category,id: uuid()})
                resetTitle()
                }}
            />
        </div>
    )   
}

export default InputField;