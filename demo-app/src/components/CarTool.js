import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';


const sortCars = (cars, carsSort) => {

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

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([...props.cars]);

  const [ carsSort, setCarsSort ] = useState({
    column: 'id',
    direction: 'asc'
  });

  const addCar = car => {

    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ]);

  };

  const doSortCars = (column) => {

    if (column !== carsSort.column) {
      setCarsSort({
        column, direction: 'asc', 
      });
    } else {
      if (carsSort.direction === 'asc') {
        setCarsSort({
          column, direction: 'desc', 
        });
      } else {
        setCarsSort({
          column, direction: 'asc', 
        });
      }
    }

  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={sortCars(cars, carsSort)}
        carsSort={carsSort} onSortCars={doSortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};