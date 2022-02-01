

export const ColorList = (props) => {

  return (
    <ul>
      {props.colors.map(color =>
        <li key={color.id}
          style={{ backgroundColor: '#' + color.hexcode }}>
            {color.name} {color.hexcode}</li>)}
    </ul>    
  );

};