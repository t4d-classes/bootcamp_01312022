import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([...props.colors]);

  const addColor = color => {

    setColors([
      ...colors,
      {
        ...color, // copy the properties from colorForm on the new color object
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);

    console.log(colors);

  };

  console.log(colors);


  return (
    <>
     <ToolHeader headerText="Color Tool" />
     <ColorList colors={colors} />
     <ColorForm buttonText="Add Color"
      onSubmitColor={addColor} />
    </>
  );

};
