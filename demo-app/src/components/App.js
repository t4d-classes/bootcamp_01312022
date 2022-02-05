import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Home } from './Home';

import { ColorToolStoreProvider } from '../colorTool/colorToolStoreContext';
import { ColorTool } from '../colorTool/components/ColorTool';

import { CarToolStoreProvider } from '../carTool/carToolStoreContext';
import { CarTool } from '../carTool/components/CarTool';

import { calcToolStore } from '../calcTool/calcToolStore';
import { CalcTool } from '../calcTool/components/CalcTool';

import { Layout } from './Layout';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="color-tool" element={<ColorToolStoreProvider>
          <ColorTool />
        </ColorToolStoreProvider>} />
        <Route path="car-tool" element={<CarToolStoreProvider>
          <CarTool />
        </CarToolStoreProvider>} />
        <Route path="calc-tool" element={<Provider store={calcToolStore}>
          <CalcTool />
        </Provider>} />
      </Route>
    </Routes>
  );

};
