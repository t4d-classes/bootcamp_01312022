import { useState } from 'react';

import "./ColorForm.css";

const getInitialColorForm = () => ({
  name: '', hexcode: '',
});

export const ColorForm = (props) => {

  const [ colorForm, setColorForm ] = useState(getInitialColorForm() /* initial value of the state */);

  const change = e => {

    setColorForm({
      // name: colorForm.name,
      // hexcode: colorForm.hexcode,
      ...colorForm, // copy the properties from the original colorForm into the new one
      // computed property
      [ e.target.name ]: e.target.value
    });

  };

  const submitColor = () => {

    // invoked the addColor function passing it the colorForm
    props.onSubmitColor({ ...colorForm });

    // sets the form back to blank
    setColorForm(getInitialColorForm());

  };


  return (
    <form>

      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>

      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>

      <button type="button" onClick={submitColor}>{props.buttonText}</button>

    </form>
  );


};


// <label htmlFor="hexcode-input">
// Hexcode:
// </label>
// <input type="text" id="hexcode-input" />