import {myLogger} from '../src/CounterApp';
/* export const increaseaction = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: 'INCREASE_COUNTER', payload: value + 1});
    }, 2000);
  };
};
 */
/* export const increaseaction = value => ({
  type: 'INCREASE_COUNTER',
  payload: value + 1,
});
 */
/* //function for dispatch from CounterApp increase with timeout

export const increaseactionAsync = value => {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increaseaction(value));
    }, 4000);
  };
};
//function for dispatch from CounterApp increase with timeout */

//  export function increaseaction1(value){

//     return {type: 'INCREASE COUNTER', payload: value}
//  }
/* export const increaseactionPromise = value => {
  return dispatch => {
    dispatch(
      new Promise((resolve, reject) => {
        setTimeout => {
          resolve(increaseaction(value)), 2000;
        };
      }),
    );
  };
}; */

export const myAction = value => {
  return {
    type: 'INCREASE_COUNTER',
    payload: new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(value + 1);
      }, 2000),
    ),
  };
};

export const decreaseaction = value => ({
  type: 'DECREASE_COUNTER',
  payload: value - 1,
});

export const resetaction = data =>
  // export const resetaction = (data) => (
  ({
    type: 'RESET',
    payload: 0,
    data: data,
  });

export const actionGetdata = () =>
  // export const resetaction = (data) => (
  ({
    type: 'LOAD_DATA',
  });
