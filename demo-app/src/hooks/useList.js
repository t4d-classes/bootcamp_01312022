import { useState, useCallback } from 'react';


export const useList = (initialItems) => {

  const [ items, setItems ] = useState([...initialItems]);

  const addItem = useCallback(item => {
    setItems([
      ...items,
      {
        ...item,
        id: Math.max(...items.map(c => c.id), 0) + 1,
      }
    ]);
  }, [items]);

  const saveItem = useCallback(item => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(c => c.id === item.id);
    newItems[itemIndex] = item;
    setItems(newItems);
  }, [items]);

  const deleteItem = useCallback(itemId => {
    setItems(items.filter(c => c.id !== itemId));
  }, [items]);


  return [ items, addItem, saveItem, deleteItem ];
};