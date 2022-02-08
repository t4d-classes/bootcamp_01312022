// import { useCarToolStoreContext } from '../carToolStoreContext';
import { useCarToolReduxSyncStore } from '../useCarToolReduxSyncStore';

export const useCarTool = () => {
  return useCarToolReduxSyncStore();
};