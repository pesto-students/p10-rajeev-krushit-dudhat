import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Room from './components/Room';

// redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store} >
    <Room />
  </Provider>,
document.getElementById("root"));
