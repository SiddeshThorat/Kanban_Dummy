import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundaries from './Components/Error-Boundaries/ErrorBoundaries.component';

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundaries>
        <App />
      </ErrorBoundaries>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
