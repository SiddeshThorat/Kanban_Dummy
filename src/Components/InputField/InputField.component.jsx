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
            <input type="text"value={title} onChange={(event) => onInputChange(event)}/>
            <input type="submit" onClick={() => {
                addTask({title,category,id: uuid()})
                resetTitle()
                }}/>
        </div>
    )   
}

export default InputField;