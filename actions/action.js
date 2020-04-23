import { myLogger } from '../src/CounterApp'
export const increaseaction = (value) => (

    {
        type: 'INCREASE_COUNTER',
        payload: value + 1
    }

)
//  export function increaseaction1(value){

//     return {type: 'INCREASE COUNTER', payload: value}                              
//  }
/* export function increaseaction(value){
   const payload = new Promise(
       (resolve, reject) => { setTimeout(resolve(value + 1), 2000) }
   )

   return  { type: 'INCREASE COUNTER', payload };
   
} */


/* export function increaseaction(value) {
return
    {setTimeout(
            {type: 'INCREASE COUNTER',
                payload: value + 1}, 2000)
    }

    } */



export const decreaseaction = value => (
    {
        type: 'DECREASE_COUNTER',
        payload: value - 1

    }
)
export const resetaction = () => (
/* export const resetaction = (data) => ( */
    {
        type: 'RESET',
        payload: 0,
 /*        data: data */

    }

)

export const getMydata = () => {
    return dispatch => {
      //dispatch(resetaction());
      return fetch('https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json')
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(resetaction(json));
          console.log('My data from GETDATA', json)
          return json;
        })
        .catch(error => console.log('url doesnt responce'));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
