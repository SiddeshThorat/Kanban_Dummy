import Header from '../Header/Header.component';
import InputField from '../InputField/InputField.component';
import './TaskBlock.styles.css';

const TaskBlockComponent = ({id,tasks,onDragOver,onDrop,addTask}) => {
    return(
        <div 
          className="container"
          onDragOver = {event => onDragOver(event)}
          onDrop ={event => onDrop(event,id)}
          
          >
            <Header>{id}</Header>
            {tasks[id]}
            <InputField addTask={(task) => addTask(task)} id={id}/>
        </div>)
}

export default TaskBlockComponent;