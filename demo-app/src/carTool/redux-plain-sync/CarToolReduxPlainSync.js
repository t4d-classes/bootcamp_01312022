import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';
import { CarTool } from '../components/CarTool';


export const CarToolReduxPlainSync = () => {

  return (
    <Provider store={carToolStore}>
      <CarTool kindOfStore="plain-sync" />
    </Provider>
  );
};