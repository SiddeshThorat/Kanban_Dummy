import React,{useState} from 'react';
import './DraggableComponent.styles.css';
import { URL } from '../../Constants/url';

const DraggableComponent = ({task,onDragStart,editTask}) => {
    const [editStatus, changeEditStatus] = useState(false)
    const [changedTaskTitle, setTaskTitle] = useState(task.title);

    const enableEdit = () => {
        changeEditStatus(true)
    }

    const changeTaskTitle = (event) => {
        event.preventDefault();
        setTaskTitle(event.target.value)
    }

    const saveChanges = async () => {
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: task.id,title: changedTaskTitle,category: task.category}),
        }
        const res = await fetch(URL + '/' + task.id, options )
        const updatedTask = await res.json();
        editTask(updatedTask)
        changeEditStatus(false)
    } 

    return(
        <div
            key={task.id}
            onDragStart= { (event) => onDragStart(event,task.title)} 
            draggable
            className="draggable"
            >
            {changedTaskTitle}
                <div className="editSection">
                    
                    {
                        editStatus ? (
                            <>
                                <input
                                className="newInputField" 
                                placeholder={"Enter new value"}
                                onChange= {(event) => changeTaskTitle(event)}
                                />
                                <button className="saveButton" onClick={() => saveChanges()} >Save</button>
                            </>
                        ) : (
                            <div className="editButtonContainer">
                                <button onClick={() => enableEdit()}>Edit</button>
                            </div>
                            )
                    }
                </div>
            
            </div>
    )
}

export default DraggableComponent;