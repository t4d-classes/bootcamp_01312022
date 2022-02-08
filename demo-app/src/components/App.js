import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';

import { ColorToolStoreProvider } from '../colorTool/colorToolStoreContext';
import { ColorTool } from '../colorTool/components/ColorTool';

import { CarToolReduxSync } from '../carTool/CarToolReduxSync';

import { CalcToolReduxPlain } from '../calcTool/redux-plain';
import { CalcToolReduxToolkit } from '../calcTool/redux-toolkit';

import { Layout } from './Layout';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="color-tool" element={<ColorToolStoreProvider>
          <ColorTool />
        </ColorToolStoreProvider>} />
        <Route path="car-tool" element={<CarToolReduxSync />} />
        <Route path="calc-tool-plain" element={<CalcToolReduxPlain />} />
        <Route path="calc-tool-toolkit" element={<CalcToolReduxToolkit />} />
      </Route>
    </Routes>
  );

};
