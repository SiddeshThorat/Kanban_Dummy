import './InputField.styles.css';
import React,{useState} from 'react';

const InputField = ({id,addTask}) => {
    const [title, setTitle] = useState("");
    
    const onInputChange = event => {
        event.preventDefault();
        console.log(event.target.value)
        setTitle(event.target.value);
    }
    return(
        <div className="inputField">
            <hr />
            <input type="text"value={title} onChange={(event) => onInputChange(event)}/>
            <input type="submit" onClick={() => addTask({title,id})}/>
        </div>
    )   
}

export default InputField;