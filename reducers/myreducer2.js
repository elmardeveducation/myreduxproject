export const initialState = {
    counter: 0
}
function reducer2(state = initialState, action){
    switch (action.type) {
        case 'RESET':
            return { counter: action.payload }
        
    }
    return state
}
export default reducer2