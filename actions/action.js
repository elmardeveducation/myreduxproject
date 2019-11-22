import { myLogger } from '../src/CounterApp'
/*export const increaseaction = (value) => (
 
{
     type: 'INCREASE_COUNTER',
     payload: value + 1
 }
  
 )*/
//  export function increaseaction1(value){
    
//     return {type: 'INCREASE COUNTER', payload: value}                              
//  }
 export function increaseaction(value){
    const payload = new Promise(
        (resolve, reject) => { setTimeout(resolve(value + 1), 2000) }
    )

    return  { type: 'INCREASE COUNTER', payload };
    
 }
    
    
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
    {
        type: 'RESET',
        payload: 0

    }

)
