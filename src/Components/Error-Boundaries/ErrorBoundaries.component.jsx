import React from 'react';

class ErrorBoundaries extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return { hasError: true }
    }
    componentDidCatch(error,info){
        console.log("Error =>",error)
    }
    render(){
        if(this.state.hasError)
          return (
              <h1>Something went wrong</h1>
          );
        else
          return this.props.children;  
    }

}

export default ErrorBoundaries;