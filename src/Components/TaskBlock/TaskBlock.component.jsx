import Header from '../Header/Header.component';
import InputField from '../InputField/InputField.component';
import './TaskBlock.styles.css';
import { capitalizeFirstLetter } from '../../Utils/utils';

const TaskBlockComponent = ({category,tasks,onDragOver,onDrop,addTask}) => {
   const capitalizedCategory = capitalizeFirstLetter(category) 
  return(
    <div>
        <div 
          className={`container${capitalizedCategory}`}
          onDragOver = {event => onDragOver(event)}
          onDrop ={event => onDrop(event,category)}
          >
            <Header>{capitalizedCategory}</Header>
            <div className="containerForDraggable">
              {tasks[category]}
            </div>
            <InputField addTask={(task) => addTask(task)} category={category}/>
        </div>
    </div>
    )
}

export default TaskBlockComponent;