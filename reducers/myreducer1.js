

export const initialState = {
    counter: 0
}
function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: action.payload }
        case 'DECREASE_COUNTER':
            return { counter: action.payload }
            case 'RESET':
            return { counter: action.payload }
    }
    return state
}
export default reducer1