import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import {
  MATH_OP_ADD,
  MATH_OP_SUBTRACT,
  MATH_OP_MULTIPLY,
} from '../constants/calcToolConstants';

import {
  selectHistory,
  selectResult,
  selectErrorMessage,
} from '../selectors/calcToolSelectors';

import {
  createMathAction,
  createClearAction,
  createDeleteHistoryEntryAction,
  divide,
} from '../actions/calcToolActions';


export const useCalcToolReduxStore = () => {

  const result = useSelector(selectResult);
  const history = useSelector(selectHistory);
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    add: createMathAction.bind(null, MATH_OP_ADD),
    subtract: createMathAction.bind(null, MATH_OP_SUBTRACT),
    multiply: createMathAction.bind(null, MATH_OP_MULTIPLY),
    divide: divide,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
  }, dispatch), [dispatch]);

  return { ...actions, result, history, errorMessage };
};
