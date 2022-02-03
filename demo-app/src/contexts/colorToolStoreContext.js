import { createContext, useContext } from 'react';

import { useList } from '../hooks/useList';

const colorToolStoreContext = createContext();

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' }, // object literal
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

export const ColorToolStoreProvider = ({ children }) => {

  return (
    <colorToolStoreContext.Provider value={useList(colorList)}>
      {children}
    </colorToolStoreContext.Provider>
  );

};

export const useColorToolStoreContext = () => {
  // return the store off of the context
  return useContext(colorToolStoreContext);
};