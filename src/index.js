import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import thunk from 'redux-thunk'

const middleware = [ thunk ];

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)
=======
import configureStore from "./store/store";

const store = configureStore();
>>>>>>> 0d3a19b979bbf801d9702dc1b307365ad870113c

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  
  </Provider>
  , document.querySelector('.container'));
