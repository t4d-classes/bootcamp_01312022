import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import {
  MATH_OP_ADD,
  MATH_OP_SUBTRACT,
  MATH_OP_MULTIPLY,
  MATH_OP_DIVIDE,
} from '../calcToolConstants';

import {
  selectHistory,
  selectResult,
  selectErrorMessage,
} from './calcToolSelectors';

import { clear, deleteHistoryEntry, math } from './slices/historySlice';
import { displayError } from './slices/errorMessageSlice';

export const useCalcToolReduxToolkitStore = () => {

  const result = useSelector(selectResult);
  const history = useSelector(selectHistory);
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    add: value => math({ opName: MATH_OP_ADD, opValue: value }),
    subtract: value => math({ opName: MATH_OP_SUBTRACT, opValue: value }),
    multiply: value => math({ opName: MATH_OP_MULTIPLY, opValue: value }),
    divide: value => {
      if (value === 0) {
        return displayError({ errorMessage: "Cannot divide by zero." });
      } else {
        return math({ opName: MATH_OP_DIVIDE, opValue: value });
      }
    },
    clear: () => clear({}),
    deleteHistoryEntry: entryId => deleteHistoryEntry({ entryId }),
  }, dispatch), [dispatch]);

  return { ...actions, result, history, errorMessage };
};
