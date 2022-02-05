import { useCarToolStoreContext } from '../carToolStoreContext';


export const useCarTool = () => {
  return useCarToolStoreContext();
};