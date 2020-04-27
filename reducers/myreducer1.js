export const initialState = {
  counter: 0,
  data: [],
};
//remark
function reducer1(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER_FULFILLED':
      return {counter: action.payload};
    case 'DECREASE_COUNTER':
      return {counter: action.payload};
    case 'RESET':
      return {counter: action.payload, data: action.data};
  }
  return state;
}
export default reducer1;
