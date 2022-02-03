import PropTypes from 'prop-types';
import { memo } from 'react';

import { carPropType } from '../propTypes/car';

export const CarViewRow = memo(({
  car,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button"
          onClick={() => editCar(car.id)}>
            Edit</button>
        <button type="button"
          onClick={() => deleteCar(car.id)}>
            Delete</button>
      </td>
    </tr>    
  );


});

CarViewRow.propTypes = {
  car: carPropType.isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};