import { colorsPropType } from '../propTypes/color';
 
export const ColorList = (props) => {

  // const colors = props.colors;
  const { colors } = props; // destructuring

  return (
    <ul>
      {colors.map(color =>
        <li key={color.id}
          style={{ backgroundColor: '#' + color.hexcode }}>
            {color.name} {color.hexcode}</li>)}
    </ul>    
  );

};

ColorList.defaultProps = {
  colors: [],
};

ColorList.propTypes = {
  colors: colorsPropType.isRequired,
};