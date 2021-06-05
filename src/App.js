import React from 'react';
import './App.css';
import TaskBlockComponent from './Components/TaskBlock/TaskBlock.component';

const URL = "https://my-json-server.typicode.com/SiddeshThorat/DummyServerForKanban/tasks"

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
