import { Provider } from 'react-redux';

import { calcToolStore } from './calcToolStore';
import { CalcTool } from '../components/CalcTool';


export const CalcToolReduxToolkit = () => {
  return (
    <Provider store={calcToolStore}>
      <CalcTool />
    </Provider>
  );
};
