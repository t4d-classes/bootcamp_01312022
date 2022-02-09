import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';
import { CarTool } from '../components/CarTool';


export const CarToolReduxPlainAsync = () => {

  return (
    <Provider store={carToolStore}>
      <CarTool kindOfStore="plain-async" />
    </Provider>
  );
};