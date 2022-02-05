import { combineReducers } from 'redux';

import {
  MATH_ACTION, DELETE_HISTORY_ENTRY_ACTION,
  CLEAR_ACTION, DISPLAY_ERROR_ACTION,
} from './calcToolActions';

const historyReducer = (history = [], action) => {

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(entry => entry.id !== action.payload.entryId);
  }


  if (action.type === MATH_ACTION) {
    return [
      ...history,
      {
        id: Math.max(...history.map(entry => entry.id), 0) + 1,
        ...action.payload,
      },
    ];
  }

  return history;

};

const errorMessageReducer = (errorMessage = '', action) => {

  if (action.type === DISPLAY_ERROR_ACTION) {
    return action.payload.errorMessage;
  }

  return '';
};


export const calcToolReducer = combineReducers({
  history: historyReducer,
  errorMessage: errorMessageReducer,
});


