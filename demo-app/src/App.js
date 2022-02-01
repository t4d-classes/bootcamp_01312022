import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

import { Layout } from './components/Layout';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' }, // object literal
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
]; // array literal

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000},
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000},
]


// React.createElement(ColorTool, { colors: colorList });
// <ColorTool colors={colorList} />

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="color-tool" element={<>
          <ColorTool colors={colorList} />
        </>} />
        <Route path="car-tool" element={<CarTool cars={carList} />} />
      </Route>
    </Routes>
  );

};
