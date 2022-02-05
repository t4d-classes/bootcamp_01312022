import PropTypes from 'prop-types';

import { carsPropType } from '../carToolPropTypes';
import { SortColHeader } from './SortColHeader';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const cols = [
  { field: 'id', label: 'Id' },
  { field: 'make', label: 'Make' },
  { field: 'model', label: 'Model' },
  { field: 'year', label: 'Year' },
  { field: 'color', label: 'Color' },
  { field: 'price', label: 'Price' },
];

export const CarTable = ({
  cars, editCarId, carsSort,
  onSortCars: sortCars,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return (
    <form>
      <table>
        <thead>
          <tr>
            {cols.map( (col, i) => <SortColHeader key={i}
              col={col} sortInfo={carsSort} onSort={sortCars} />)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car =>
            car.id === editCarId
              ? <CarEditRow key={car.id} car={car}
                  onSaveCar={saveCar} onCancelCar={cancelCar} />
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
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
