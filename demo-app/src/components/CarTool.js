import { useCarTool } from '../hooks/useCarTool';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const {
    cars, carsSort, editCarId, addCar, saveCar,
    deleteCar, editCar, cancelCar, sortCars,
  } = useCarTool();

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
