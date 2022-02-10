// import { useCarToolStoreContext } from '../carToolStoreContext';
import {
  useCarToolReduxPlainSyncStore
} from '../redux-plain-sync/useCarToolReduxPlainSyncStore';
import {
  useCarToolReduxPlainAsyncStore
} from '../redux-plain-async/useCarToolReduxPlainAsyncStore';
import {
  useCarToolReduxToolkitAsyncStore
} from '../redux-toolkit-async/useCarToolReduxToolkitAsyncStore';

export const useCarTool = (kindOfStore = 'plain-sync') => {

  let useReduxStore;

  switch (kindOfStore) {
    case 'toolkit-async':
      useReduxStore = useCarToolReduxToolkitAsyncStore;
      break;
    case 'plain-async':
      useReduxStore = useCarToolReduxPlainAsyncStore;
      break;
    default:
      useReduxStore = useCarToolReduxPlainSyncStore;
      break;
  }

  return useReduxStore();

};
