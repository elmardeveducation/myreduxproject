import React from 'react'
import {AppRegistry} from 'react-native';

//import Redux libraries
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import Redux libraries


import App from './App';
import {name as appName} from './app.json';
//import all reducers from index.js in reducers folder
import reducer from './reducers'

//import all reducers from index.js in reducers folder

//how to create store
const mystore = createStore(reducer);
//how to create store


//my entry point for access to store from all components
const Myentrypoint = () =>     
<Provider store={mystore}><App/></Provider>;
//my entry point for access to store from all components

AppRegistry.registerComponent(appName, () => Myentrypoint);
