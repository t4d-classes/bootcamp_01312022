import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import { createAddAction, createSubtractAction } from '../actions/calcToolActions';


export const useCalcToolReduxStore = () => {

  const result = useSelector(state => state.result);


  const dispatch = useDispatch();

  // using memo to only produce the actions object on the first render
  const actions = useMemo(() => bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
  }, dispatch), [dispatch /* the reference to dispatch never changes */]);

  // the actions object looks like this:
  // {
  //   add: value => dispatch(createAddAction(value)),
  //   subtract: value => dispatch(createSubractAction(value)),
  // }


  // return { add, subtract, result };
  return { ...actions, result };



};

