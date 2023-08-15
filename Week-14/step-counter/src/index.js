import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StepCounter from './components/StepCounter';

// redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store} >
    <StepCounter />
  </Provider>,
document.getElementById("root"));
