import {
  useCalcToolReduxPlainStore
} from '../redux-plain/useCalcToolReduxPlainStore';
import {
  useCalcToolReduxToolkitStore
} from '../redux-toolkit/useCalcToolReduxToolkitStore';

export const useCalcTool = (kindOfStore = 'plain') => {

  let useReduxStore;

  if (kindOfStore === 'plain') {
    useReduxStore = useCalcToolReduxPlainStore;
  } else {
    useReduxStore = useCalcToolReduxToolkitStore;
  }

  return useReduxStore();

};