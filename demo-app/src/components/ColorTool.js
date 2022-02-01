
export const ColorTool = (props) => {

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