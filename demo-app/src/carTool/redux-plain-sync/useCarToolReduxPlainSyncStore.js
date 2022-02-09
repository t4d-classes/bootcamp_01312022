import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import {
  selectSortedCars,
  selectCarsSort,
  selectEditCarId,
} from './carToolSelectors';

import {
  createAddCarAction,
  createSaveCarAction,
  createDeleteCarAction,
  createEditCarAction,
  createCancelCarAction,
  createSortCarsAction,
} from './carToolActions';


export const useCarToolReduxPlainSyncStore = () => {

  const cars = useSelector(selectSortedCars);
  const carsSort = useSelector(selectCarsSort);
  const editCarId = useSelector(selectEditCarId);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    addCar: createAddCarAction,
    saveCar: createSaveCarAction,
    deleteCar: createDeleteCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  return { ...actions, cars, carsSort, editCarId, };
};
