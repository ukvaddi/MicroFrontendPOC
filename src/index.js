import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

const middleware = [ thunk ];

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  
  </Provider>
  , document.querySelector('.container'));
