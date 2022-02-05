import { createSelector } from 'reselect';

import {
  MATH_OP_ADD,
  MATH_OP_SUBTRACT,
  MATH_OP_MULTIPLY,
  MATH_OP_DIVIDE,
} from './calcToolConstants';

export const mathOperations = new Map([
  [MATH_OP_ADD, (x,y) => x + y],
  [MATH_OP_SUBTRACT, (x,y) => x - y],
  [MATH_OP_MULTIPLY, (x,y) => x * y],
  [MATH_OP_DIVIDE, (x,y) => x / y],
]);

export const selectHistory = state => state.history;

export const selectErrorMessage = state => state.errorMessage;

export const selectResult = createSelector(selectHistory, history =>
  history.reduce((result, entry) =>
    mathOperations.get(entry.opName)(result, entry.opValue), 0));