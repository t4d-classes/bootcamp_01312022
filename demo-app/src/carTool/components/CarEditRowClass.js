import PropTypes from 'prop-types';
import { Component, createRef } from 'react';

import { carPropType } from '../carToolPropTypes';

export class CarEditRow extends Component {

  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: this.props.car.year,
    color: this.props.car.color,
    price: this.props.car.price,
  };

  makeControl = createRef();

  componentDidMount() {
    if (this.makeControl.current) {
      this.makeControl.current.focus();
    }
  }

  change = e => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value
    });
  };

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  };


  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" name="make" ref={this.makeControl}
          value={this.state.make} onChange={this.change} /></td>
        <td><input type="text" name="model"
          value={this.state.model} onChange={this.change} /></td>
        <td><input type="number" name="year"
          value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" name="color"
          value={this.state.color} onChange={this.change} /></td>
        <td><input type="number" name="price"
          value={this.state.price} onChange={this.change} /></td>
        <td>
          <button type="button" onClick={this.saveCar}>Save</button>
          <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
        </td>
      </tr>    
    );
  }

}

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};