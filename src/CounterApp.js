import React, { Component } from "react";

import { increaseaction, decreaseaction, resetaction } from '../actions/action'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'


class CounterApp extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter(this.props.counter)}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter(this.props.counter)}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.resetCounter()}>
                        <Text style={{ fontSize: 20 }}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    
}

function mapStateToProps(state) {
    //console.log('mystate', state)
    
    return {
         counter: state.reducer1.counter
    }
}
 /* export const myLogger=(store)=>(next)=>(action)=>{
    console.log('Logged action', action)
    console.log ('mystate from myLogger', store.reducer1.getState())
    next (action)
} 
     */
/* export const myLogger=(state)=>{
    console.log('My state from mylogger', mystore.getState())
  
    }
 */
    
function mapDispatchToProps(dispatch) {
    
    return {
        
        increaseCounter: (counter) => dispatch(increaseaction(counter)),
        decreaseCounter: (counter) => dispatch(decreaseaction(counter)),
        resetCounter: () => dispatch(resetaction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
