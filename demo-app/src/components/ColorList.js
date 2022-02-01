import PropTypes from 'prop-types';
 
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
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hexcode: PropTypes.string.isRequired,
  })).isRequired,
};