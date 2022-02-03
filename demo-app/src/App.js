import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { ColorTool } from './components/ColorTool';

import { CarTool } from './components/CarTool';
import { Layout } from './components/Layout';

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000},
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000},
]

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="color-tool" element={<ColorToolStoreProvider>
          <ColorTool />
        </ColorToolStoreProvider>} />
        <Route path="car-tool" element={<CarTool cars={carList} />} />
      </Route>
    </Routes>
  );

};
