import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';
import { CarTool } from '../components/CarTool';


export const CarToolReduxToolkitAsync = () => {
  return (
    <Provider store={carToolStore}>
      <CarTool kindOfStore="toolkit-async" />
    </Provider>
  );
};
