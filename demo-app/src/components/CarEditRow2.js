import PropTypes from 'prop-types';
import { useState } from 'react';

import { carPropType } from '../propTypes/car';

const getEditControlId = (cols, field) => {
  return cols.find(col => {
    return col.field === field;
  }).editControlId;

};

export const CarEditRow = ({
  car,
  cols,
}) => {

  const [ carForm, setCarForm ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = e => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? parseInt(e.target.value, 10) : e.target.value
    });

  };


  return (
    <tr>
      <td>{car.id}</td>
      <td><input type="text" name="make" id={getEditControlId(cols, 'make')}
        value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model" id={getEditControlId(cols, 'model')}
        value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year" id={getEditControlId(cols, 'year')}
        value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color" id={getEditControlId(cols, 'color')}
        value={carForm.color} onChange={change} /></td>
      <td><input type="number" name="price" id={getEditControlId(cols, 'price')}
        value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </td>
    </tr>    
  );


};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  cols: PropTypes.array.isRequired,
};