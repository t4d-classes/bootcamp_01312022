import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';
import { CarTool } from '../components/CarTool';


export const CarToolReduxSync = () => {

  return (
    <Provider store={carToolStore}>
      <CarTool />
    </Provider>
  );
};