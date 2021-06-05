import React from 'react';
import './App.css';
import DraggableComponent from './Components/DraggableComponent/DraggableComponent.component';
import TaskBlockComponent from './Components/TaskBlock/TaskBlock.component';
import { URL } from './Constants/url';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDragStart = (event,category) => {
     event.dataTransfer.setData("category",category);
  }

  onDrop = (event,category) => {
    let id = event.dataTransfer.getData("category");
    let tasks = this.state.tasks.filter(task => {
      if(task.title === id){
        task.category = category
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });

  }

  addTask = (task) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({ id: task.id,title: task.title,category: task.category})
    })
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
    })
    .then(newTask => {
      this.setState({
        tasks : [...this.state.tasks,newTask]
      })
    })
    .catch(e => {
    console.log(e);
    });

  }
  
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data =>
       this.setState({tasks :data}) 
      );
  }
  
  editTask = (updatedTask)=> {
    const taskArray = this.state.tasks.filter(task => task.id !== updatedTask.id)
    this.setState({ tasks: [...taskArray,updatedTask]})
  }

  render(){
    let tasks = {
      icebox: [],
      pending: [],
      wip: [],
      review: [],
      done: []
    }

    this.state.tasks && this.state.tasks.forEach(task => {
      tasks[task.category].push(
        <DraggableComponent
        key={task.id} 
        task={task}
        onDragStart={(event,title) => this.onDragStart(event,title)}
        editTask={(task) => this.editTask(task)}
        />
      )
    })
    
    return (
      <div className="app">
        <div className="mainContainer">
          {
           Object.keys(tasks).map(
             item => <TaskBlockComponent
             key={item.id}
             category={item} 
             tasks={tasks} 
             onDragOver={this.onDragOver}
             onDrop={this.onDrop}
             addTask={this.addTask}
             />
             )
          }
        </div>      
      </div>
    );
  }
}

export default App;
