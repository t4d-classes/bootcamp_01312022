import { colorsPropType } from '../propTypes/color';
import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, addColor ] = useList([...props.colors]);

  return (
    <>
     <ToolHeader headerText="Color Tool" />
     <ColorList colors={colors} />
     <ColorForm buttonText="Add Color"
      onSubmitColor={addColor} />
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType,
};
