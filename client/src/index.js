import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'antd/dist/antd.css';

const Root = () => {
  return (
      <React.StrictMode>
        <Router>
          <Route path="/" component={App}/>
        </Router>
    </React.StrictMode>
  )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
