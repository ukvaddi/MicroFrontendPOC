import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

import configureStore from "./store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  
  </Provider>
  , document.querySelector('.container'));
