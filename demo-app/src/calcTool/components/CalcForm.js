import PropTypes from 'prop-types';
import { useState, memo } from 'react';


export const CalcForm = memo(({
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide,
  onClear,
}) => {

  const [ numInput, setNumInput ] = useState(0);

  const clear = () => {
    setNumInput(0);
    onClear();
  };

  return (
    <form>
      <label>
        <input type="number" value={numInput}
          onChange={e => setNumInput(parseFloat(e.target.value))} />
      </label>
      <fieldset>
        <button type="button" onClick={() => add(numInput)}>+</button>
        <button type="button" onClick={() => subtract(numInput)}>-</button>
        <button type="button" onClick={() => multiply(numInput)}>*</button>
        <button type="button" onClick={() => divide(numInput)}>/</button>
        <button type="button" onClick={clear}>C</button>
      </fieldset>
    </form>
  );

});

CalcForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onSubtract: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired,
  onDivide: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};