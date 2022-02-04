import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { ColorTool } from './components/ColorTool';

import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { CarTool } from './components/CarTool';

import { Layout } from './components/Layout';

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
      </Route>
    </Routes>
  );

};
