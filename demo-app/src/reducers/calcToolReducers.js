import { combineReducers } from 'redux';

import { ADD_ACTION, SUBTRACT_ACTION } from '../actions/calcToolActions';

// the result paremeter is the result property of the state object
const resultReducer = (result = 0, action) => {

  // reducers are pure functions
  // 1. the only data used in the function comes from the parameters
  // 2. the parameters cannot be mutated
  // 3. the function cannot cause side-effects
  // 4. the only output of the function is the return value

  if (action.type === ADD_ACTION) {
    return result + action.payload.value;
  }

  if (action.type === SUBTRACT_ACTION) {
    return result - action.payload.value;
  }  

  return result;

};


// combine reducers produces this function here...
// export const calcToolReducer = (state = {}, action) => {

//   return {
//     ...state,
//     // slicing pattern, feature pattern
//     result: resultReducer(state.result, action),
//   };
// };

export const calcToolReducer = combineReducers({
  result: resultReducer,
});

