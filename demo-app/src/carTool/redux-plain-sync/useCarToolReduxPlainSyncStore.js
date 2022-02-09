import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useEffect } from 'react';

import {
  selectSortedCars,
  selectCarsSort,
  selectEditCarId,
} from './carToolSelectors';

import {
  refreshCars,
  addCar,
  saveCar,
  deleteCar,
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
    refreshCars,
    addCar,
    saveCar,
    deleteCar,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshCars();
  }, [actions])

  return { ...actions, cars, carsSort, editCarId, };
};
