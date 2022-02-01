
export const ColorTool = (props) => {

  // single worst line of code a react developer could ever write
  props.colors.push({ id: 5, name: 'purple', hexcode: 'ff00ff'});

  // props.newProp = 'test';
  // props.colors = [];

  console.log(Object.isFrozen(props));

  return (
    <>
      <header>
        <h2>Color Tool</h2>
      </header>
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>{color.name} {color.hexcode}</li>)}
      </ul>
    </>
  );

};