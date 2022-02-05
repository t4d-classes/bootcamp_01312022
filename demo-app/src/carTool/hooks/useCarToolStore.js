import { useState, useCallback, useMemo } from 'react';

import { useList } from '../../shared/hooks/useList';

const sortTheCars = (cars, carsSort) => {

  console.log('sorting the cars');

  return [ ...cars ].sort((a,b) => {

    if (a[carsSort.column] < b[carsSort.column]) {
      return carsSort.direction === 'asc' ? -1 : 1;
    } else if (a[carsSort.column] > b[carsSort.column]) {
      return carsSort.direction === 'asc' ? 1 : -1;
    } else {
      return 0;
    }

  });

};

export const useCarToolStore = (initialCars) => {

  const [ cars, appendCar, replaceCar, removeCar ] = useList([...initialCars]);

  const [ carsSort, setCarsSort ] = useState({
    column: 'id',
    direction: 'asc',
  });

  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = useCallback(car => {
    appendCar(car);
    setEditCarId(-1);
  }, [appendCar]);

  const saveCar = useCallback(car => {
    replaceCar(car);
    setEditCarId(-1);
  }, [replaceCar]);

  const deleteCar = useCallback(carId => {
    removeCar(carId);
    setEditCarId(-1);
  }, [removeCar]);

  const editCar = useCallback(carId => {
    setEditCarId(carId);
  }, []);

  const cancelCar = useCallback(() => {
    setEditCarId(-1);
  }, []);  


  const sortCars = useCallback((column) => {

    if (column !== carsSort.column) {
      setCarsSort({
        ...carsSort,
        column,
        direction: 'asc', 
      });
    } else {
      if (carsSort.direction === 'asc') {
        setCarsSort({
          ...carsSort,
          direction: 'desc', 
        });
      } else {
        setCarsSort({
          ...carsSort,
          direction: 'asc', 
        });
      }
    }

  }, [carsSort]);

  return {
    cars: useMemo(() => sortTheCars(cars, carsSort), [cars, carsSort]),
    carsSort,
    editCarId,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
    sortCars,
  };

};
