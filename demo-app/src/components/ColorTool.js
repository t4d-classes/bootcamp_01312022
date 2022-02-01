
export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'red', hexcode: 'ff0000' }, // object literal
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ]; // array literal


  // const colorListItems = colors.map(c =>
  //   <li key={c.id}>{c.name} {c.hexcode}</li>)

  return (
    <>
      <header>
        <h2>Color Tool</h2>
      </header>
      <ul>
        {colors.map(c =>
          <li key={c.id}>{c.name} {c.hexcode}</li>)}
      </ul>
    </>
  );

};