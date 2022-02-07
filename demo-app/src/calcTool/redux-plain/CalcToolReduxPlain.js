import { Provider } from 'react-redux';

import { calcToolStore } from './calcToolStore';
import { CalcTool } from '../components/CalcTool';


export const CalcToolReduxPlain = () => {

  return (
    <Provider store={calcToolStore}>
      <CalcTool kindOfStore="plain" />
    </Provider>
  );
};