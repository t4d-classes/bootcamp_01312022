import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';

import { useForm } from '../../shared/hooks/useForm';

import "./ColorForm.css";

export const ColorForm = (props) => {

  const defaultControl = useRef();
  const [ formSubmitted, setFormSubmitted ] = useState(0);

  useEffect(() => {
    if (defaultControl.current) {
      defaultControl.current.focus();
    }
  }, [formSubmitted]);

  const [ colorForm, change, resetColorForm ] = useForm({
    name: '', hexcode: '',
  });

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    resetColorForm();
    setFormSubmitted(formSubmitted + 1);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" ref={defaultControl}
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitColor: PropTypes.func.isRequired,
};
