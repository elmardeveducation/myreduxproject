import React from 'react';
import {AppRegistry} from 'react-native';

//import Redux libraries
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {myLogger} from './src/CounterApp';
import thunk from 'redux-thunk';

//import Redux libraries

import App from './App';
import {name as appName} from './app.json';
//import all reducers from index.js in reducers folder
import reducer from './reducers';
import promise from 'redux-promise-middleware';
import {resetaction} from './actions/action';
/* 
import all reducers from index.js in reducers folder

how to create store
 Attention for REDUX0LOGGER: createLogger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions (#20).
export const mystore = createStore(reducer, applyMiddleware(thunk, myLogger, createLogger()));
 export const mystore = createStore(reducer, applyMiddleware(thunk, createLogger()));  */
export const mystore = createStore(
  reducer,
  applyMiddleware(thunk, promise, createLogger()),
);

console.log(mystore.getState());
//how to create store

//my entry point for access to store from all components
const Myentrypoint = () => (
  <Provider store={mystore}>
    <App />
  </Provider>
);
//my entry point for access to store from all components

AppRegistry.registerComponent(appName, () => Myentrypoint);
