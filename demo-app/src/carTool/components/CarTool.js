import { useRef, useEffect } from 'react';

import { useCarTool } from '../hooks/useCarTool';
import { ToolHeader } from '../../shared/components';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const defaultControl = useRef();

  const {
    cars, carsSort, editCarId, addCar, saveCar,
    deleteCar, editCar, cancelCar, sortCars,
  } = useCarTool();  

  useEffect(() => {
    if (defaultControl.current && editCarId === -1) {
      defaultControl.current.setFocus();
    }
  }, [cars, editCarId]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        carsSort={carsSort}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar}
        onSortCars={sortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar}
        ref={defaultControl} />
    </>
  );

};
