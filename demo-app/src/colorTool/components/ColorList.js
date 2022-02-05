import { colorsPropType } from '../colorToolPropTypes';
 
export const ColorList = ({ colors }) => {

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