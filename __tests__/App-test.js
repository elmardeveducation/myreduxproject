/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';
import { JestEnvironment } from '@jest/environment';
jest.mock('../src/CounterApp', ()=>()=>{return (null)})

describe('test my all APP component', ()=>{

//snapshot my component App
  it('renders correctly', () => {
  let mysnapshotforApp=renderer.create(<App />).toJSON();
  console.log(mysnapshotforApp)
  expect (mysnapshotforApp).toMatchSnapshot()
});


})