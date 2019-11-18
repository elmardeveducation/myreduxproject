export const increaseaction = () => (
    {
        type: 'INCREASE_COUNTER',
        payload: state.counter + 1

    }
    )

export const decreaseaction = () => (
    {
        type: 'DECREASE_COUNTER',
        payload: state.counter - 1

    }
    )

    export const resetaction = () => (
        {
            type: 'RESET',
            payload: 0
    
        }
        )