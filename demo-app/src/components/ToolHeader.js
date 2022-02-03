import PropTypes from 'prop-types';
import { memo } from 'react';
 
export const ToolHeader = memo(props => {

  return (
    <header>
      <h2>{props.headerText}</h2>
    </header>    
  );
});

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};