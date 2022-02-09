import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

import { useCarTool } from '../hooks/useCarTool';
import { ToolHeader } from '../../shared/components';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ kindOfStore }) => {

  const defaultControl = useRef();

  const {
    cars, carsSort, editCarId, addCar, saveCar,
    deleteCar, editCar, cancelCar, sortCars,
  } = useCarTool(kindOfStore);  

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

CarTool.defaultProps = {
  kindOfStore: 'plain-sync',
};

CarTool.propTypes = {
  kindOfStore: PropTypes.string.isRequired,
};
