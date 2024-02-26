import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Product from './Product';
import Header from './Header';
// import reducer, { initialState } from "./reducer";
// import { StateProvider } from "./StateProvider";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer from "./reducer";
import './index.css';

const store = configureStore({reducer: reducer});

ReactDOM.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
