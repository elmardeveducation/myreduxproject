export const increaseaction = value => (
    {
        type: 'INCREASE_COUNTER',
        payload: value + 1

    }
    )

export const decreaseaction = value => (
    {
        type: 'DECREASE_COUNTER',
        payload: value - 1

    }
    )

    export const resetaction= () => (
        {
            type: 'RESET',
            payload: 0
    
        }
        
        )
