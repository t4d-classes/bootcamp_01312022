import { useState } from 'react';

import { useList } from '../hooks/useList';

const sortTheCars = (cars, carsSort) => {

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

  const addCar = car => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };  


  const sortCars = (column) => {

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

  };

  return {
    cars: sortTheCars(cars, carsSort),
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
