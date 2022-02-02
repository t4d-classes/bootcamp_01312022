import PropTypes from 'prop-types';
import { useRef, useMemo } from 'react';

import { carsPropType } from '../propTypes/car';
import { SortColHeader } from './SortColHeader';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const getCols = (idSuffix) => ([
  { field: 'id', label: 'Id' },
  { field: 'make', label: 'Make', editControlId: `edit-make-input-${idSuffix}` },
  { field: 'model', label: 'Model', editControlId: `edit-model-input-${idSuffix}` },
  { field: 'year', label: 'Year', editControlId: `edit-year-input-${idSuffix}` },
  { field: 'color', label: 'Color', editControlId: `edit-color-input-${idSuffix}` },
  { field: 'price', label: 'Price', editControlId: `edit-price-input-${idSuffix}` },
]);


export const CarTable = ({
  cars, editCarId, carsSort,
  onSortCars: sortCars,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  // will work 100%
  // the initial value, will the value we use on each render
  const htmlElementIdSuffix = useRef(Math.floor(Math.random() * 100000));

  const idSuffix = htmlElementIdSuffix.current;

  const cols = useMemo(
    () => getCols(idSuffix),
    [idSuffix],
  );

  // this looks awesome but could recompute changing the random value
  // const cols = useMemo(
  //   () => getCols(Math.floor(Math.random() * 100000)),
  //   [], // empty array means run on first render only
  // );

  // always generate a new id suffix which is not good
  // const cols = getCols(Math.floor(Math.random() * 100000));

  return (
    <form>
      <table>
        <thead>
          <tr>
            {cols.map( (col, i) => <SortColHeader
              key={i} col={col} editMode={editCarId > 0}
              sortInfo={carsSort} onSort={sortCars} />)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car =>
            car.id === editCarId
              ? <CarEditRow key={car.id} car={car} cols={cols} />
              : <CarViewRow key={car.id} car={car}
                  onEditCar={editCar} onDeleteCar={deleteCar} />)}
        </tbody>
      </table>
    </form>
  );

}

CarTable.defaultProps = {
  cars: [],
  carsSort: {
    column: 'id', direction: 'asc',
  },
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  carsSort: PropTypes.shape({
    column: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
  }).isRequired,
  onSortCars: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
