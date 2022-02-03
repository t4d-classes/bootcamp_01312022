import PropTypes from 'prop-types';

export const ToolHeader = props => {
  return (
    <header>
      <h2>{props.headerText}</h2>
    </header>    
  );
}

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};