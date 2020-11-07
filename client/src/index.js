import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from "react-router-dom";
import configureStore from './store'
import {Provider} from 'react-redux'
import state from './store/state'
import 'antd/dist/antd.css';
const store = configureStore(state)

const Root = () => {
  return (
      <React.StrictMode>
        <Provider store={store}>
            <Router>
              <Route path="/" component={App}/>
            </Router>
        </Provider>
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
