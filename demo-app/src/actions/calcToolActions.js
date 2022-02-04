// action object
// type: string - ADD, SUBTRACT
// payload? - whatever data is needed for the action
//   value to ADD or SUBTRACT


export const ADD_ACTION = "[CalcTool] ADD";
export const SUBTRACT_ACTION = "[CalcTool] SUBTRACT";

export const CALC_ACTIONS = [ADD_ACTION, SUBTRACT_ACTION];

export const createAddAction = value =>
  ({ type: ADD_ACTION, payload: { value } });

export const createSubtractAction = value =>
  ({ type: SUBTRACT_ACTION, payload: { value } });

