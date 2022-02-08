// import { useCarToolStoreContext } from '../carToolStoreContext';
import { useCarToolReduxSyncStore } from '../redux-plain/useCarToolReduxSyncStore';

export const useCarTool = () => {
  return useCarToolReduxSyncStore();
};