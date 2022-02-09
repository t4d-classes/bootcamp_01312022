// import { useCarToolStoreContext } from '../carToolStoreContext';
import {
  useCarToolReduxPlainSyncStore
} from '../redux-plain-sync/useCarToolReduxPlainSyncStore';
import {
  useCarToolReduxPlainAsyncStore
} from '../redux-plain-async/useCarToolReduxPlainAsyncStore';

export const useCarTool = (kindOfStore = 'plain-sync') => {

  let useReduxStore;

  switch (kindOfStore) {
    case 'plain-async':
      useReduxStore = useCarToolReduxPlainAsyncStore;
      break;
    default:
      useReduxStore = useCarToolReduxPlainSyncStore;
      break;
  }

  return useReduxStore();

};
