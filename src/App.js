import React from 'react';
import './App.css';
import TaskBlockComponent from './Components/TaskBlock/TaskBlock.component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {title: 'Test 1',id:'icebox'},
        {title: 'Test 2',id:'pending'},
        {title: 'Test 3',id:'wip'},
        {title: 'Test 4',id:'review'},
        {title: 'Test 5',id:'done'}
      ]
    }
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  //ASSUMED TITLE TO BE UNIQUE
  onDragStart = (event,id) => {
     event.dataTransfer.setData("id",id);
     console.log();
  }

  onDrop = (event,categoryId) => {
    let id = event.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter(task => {
      if(task.title === id){
        task.id = categoryId
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });

  }
  
  render(){
    let tasks = {
      icebox: [],
      pending: [],
      wip: [],
      review: [],
      done: []
    }

    this.state.tasks.forEach(task => {
      tasks[task.id].push(
        <div
        key={task.title}
        onDragStart= { (event) => this.onDragStart(event,task.title)} 
        draggable
        className="draggable"
        >
          {task.title}
        </div>
      )
    })
  
    return (
      <div className="app">
        <div className="mainContainer">
          {
           Object.keys(tasks).map(
             item => <TaskBlockComponent 
             id={item} 
             tasks={tasks} 
             onDragOver={this.onDragOver}
             onDrop={this.onDrop}
             />
             )
          }
        </div>      
      </div>
    );
  }
}

export default App;
