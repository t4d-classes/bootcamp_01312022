import { createContext, useContext } from 'react';

import { useCarToolStore } from './hooks/useCarToolStore';

const carToolStoreContext = createContext();

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000},
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000},
];

export const CarToolStoreProvider = ({ children }) => {
  return (
    <carToolStoreContext.Provider value={useCarToolStore(carList)}>
      {children}
    </carToolStoreContext.Provider>
  );
};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};