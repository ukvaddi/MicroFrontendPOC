import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom'


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  
  </Provider>
  , document.querySelector('.container'));
