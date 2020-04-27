import React, {Component} from 'react';

import {
  increaseaction,
  decreaseaction,
  resetaction,
  getMydata,
  increaseactionAsync,
  increaseactionPromise,
  myAction,
} from '../actions/action';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'column',
            width: 200,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => this.props.increaseCounter(this.props.counter)}>
            <Text style={{fontSize: 20}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{this.props.counter}</Text>
          <TouchableOpacity
            onPress={() => this.props.decreaseCounter(this.props.counter)}>
            <Text style={{fontSize: 20}}>Decrease</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => this.props.resetaction()}>
            <Text style={{fontSize: 20}}>Reset</Text>
          </TouchableOpacity>
           */}
          <TouchableOpacity onPress={() => this.props.resetaction()}>
            <Text style={{fontSize: 20}}>Reset </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  //console.log('mystate', state)

  return {
    ...state,
    counter: state.reducer1.counter,
    data: state.reducer1.data,
  };
}
/* export const myLogger=(store)=>(next)=>(action)=>{
    console.log('Logged action', action)
    console.log ('mystate from myLogger', store.reducer1.getState())
    next (action)
} 
     */
export const myLogger = store => next => action => {
  if (action.type == 'DECREASE_COUNTER' && action.payload < 0) {
    action.payload = 0;
  }
  console.log('My state from mylogger', action, 'My counter=' + action.payload);
  next(action);
};

/*  export const myMiddlewarefunction=(store)=>(next)=>(action)=>{
        console.log('My state from mylogger', action)
        next(action)
      
        }
    */

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: counter => dispatch(myAction(counter)),
    decreaseCounter: counter => dispatch(decreaseaction(counter)),
    /*       getmydata: () => dispatch(getMydata())  */
    resetaction: () => dispatch(getMydata()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
