import React from 'react'
import {AppRegistry} from 'react-native';

//import Redux libraries
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider  } from 'react-redux'
// import logger from 'redux-logger';
import { myLogger } from './src/CounterApp';
import thunk from 'redux-thunk'

//import Redux libraries


import App from './App';
import {name as appName} from './app.json';
//import all reducers from index.js in reducers folder
import reducer from './reducers'
import promise from 'redux-promise-middleware';


//import all reducers from index.js in reducers folder



//how to create store
export const mystore = createStore(reducer, applyMiddleware(myLogger));
console.log(mystore.getState())
//how to create store

//my entry point for access to store from all components
const Myentrypoint = () =>     
<Provider store={mystore}><App/></Provider>;
//my entry point for access to store from all components

AppRegistry.registerComponent(appName, () => Myentrypoint);
