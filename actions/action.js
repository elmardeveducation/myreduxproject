import {myLogger} from '../src/CounterApp'; /* export function increaseaction(value){
    const payload = new Promise(
        (resolve, reject) => { setTimeout(resolve(value + 1), 2000) }
    )

    return  { type: 'INCREASE COUNTER', payload };
    
 }
  */ //  export function increaseaction1(value){ //     return {type: 'INCREASE COUNTER', payload: value} //  }
/* 
export const increaseaction = value => ({
  type: 'INCREASE_COUNTER',
  payload: value + 1,
});
 */

function increaseaction(value) {
  return {
    type: 'INCREASE_COUNTER',
    payload: value + 1,
  };
}

export function incrementAsync(value) {
  return dispatch => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increaseaction(value));
    }, 2000);
  };
}
/* export function increaseaction(value) {
  setTimeout(() => ({type: 'INCREASE_COUNTER', payload: value}), 5000);
  // return setTimeout(() => (), 2000);
}
 */ export const decreaseaction = value => ({
  type: 'DECREASE_COUNTER',
  payload: value - 1,
});

export const resetaction = () => ({
  type: 'RESET',
  payload: 0,
});
