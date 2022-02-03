import { carsPropType } from '../propTypes/car';
import { useCarToolStore } from '../hooks/useCarToolStore';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const {
    cars, carsSort, editCarId, addCar, saveCar,
    deleteCar, editCar, cancelCar, sortCars,
  } = useCarToolStore([...props.cars]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        carsSort={carsSort}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar}
        onSortCars={sortCars} />
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