import Header from '../Header/Header.component';
import './TaskBlock.styles.css';

const TaskBlockComponent = ({id,tasks,onDragOver,onDrop}) => {
    return(
        <div 
          className="container"
          onDragOver = {event => onDragOver(event)}
          onDrop ={event => onDrop(event,id)}
          >
            <Header>{id}</Header>
            {tasks[id]}
        </div>)
}

export default TaskBlockComponent;