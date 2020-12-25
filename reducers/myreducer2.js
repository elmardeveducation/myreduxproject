import reducer1 from './myreducer1';

export const initialState = {
  counter: 0,
};
function reducer2(state = initialState, action) {
  switch (action.type) {
    case 'RESET':
      return {counter: action.payload};
      reducer2.state.counter;
      reducer1.state.counter;
  }
  return state;
}
export default reducer2;
