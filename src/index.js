import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/roboto";
import {store} from "./redux/store"
import {Provider} from "react-redux"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Fragment>
        <CssBaseline/>
        <App/>
      </Fragment>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
