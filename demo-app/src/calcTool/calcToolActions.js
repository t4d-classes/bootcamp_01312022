import { MATH_OP_DIVIDE } from './calcToolConstants';

export const MATH_ACTION = "[CalcTool] MATH";
export const DELETE_HISTORY_ENTRY_ACTION = "[CalcTool] DELETE_HISTORY_ENTRY";
export const CLEAR_ACTION = "[CalcTool] CLEAR";
export const DISPLAY_ERROR_ACTION = "[CalcTool] DISPLAY_ERROR";

export const createMathAction = (opName, opValue) =>
  ({ type: MATH_ACTION, payload: { opName, opValue } });

export const createClearAction = () =>
  ({ type: CLEAR_ACTION });

export const createDeleteHistoryEntryAction = entryId =>
  ({ type: DELETE_HISTORY_ENTRY_ACTION, payload: { entryId } });

export const createDisplayErrorAction = errorMessage =>
  ({ type: DISPLAY_ERROR_ACTION, payload: { errorMessage } });

export const divide = value => {
  if (value === 0) {
    return createDisplayErrorAction("Cannot divide by zero.");
  } else {
    return createMathAction(MATH_OP_DIVIDE, value);
  }
};
