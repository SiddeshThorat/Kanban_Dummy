import Header from '../Header/Header.component';
import InputField from '../InputField/InputField.component';
import './TaskBlock.styles.css';

const TaskBlockComponent = ({category,tasks,onDragOver,onDrop,addTask}) => {
    return(
        <div 
          className="container"
          onDragOver = {event => onDragOver(event)}
          onDrop ={event => onDrop(event,category)}
          >
            <Header>{category}</Header>
            <div className="containerForDraggable">
              {tasks[category]}
            </div>
            <InputField addTask={(task) => addTask(task)} category={category}/>
        </div>)
}

export default TaskBlockComponent;