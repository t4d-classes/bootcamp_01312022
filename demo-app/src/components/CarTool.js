import { useState } from 'react';

import { carsPropType } from '../propTypes/car';
import { useList } from '../hooks/useList';
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

  const [ cars, appendCar, replaceCar, removeCar ] = useList([...props.cars]);

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


  const doSortCars = (column) => {

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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={sortCars(cars, carsSort)} editCarId={editCarId}
        carsSort={carsSort}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar}
        onSortCars={doSortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType,
};