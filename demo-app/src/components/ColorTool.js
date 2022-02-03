import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

import { useColorTool } from '../hooks/useColorTool';

export const ColorTool = () => {

  const [ colors, addColor ] = useColorTool();

  return (
    <>
     <ToolHeader headerText="Color Tool" />
     <ColorList colors={colors} />
     <ColorForm buttonText="Add Color"
      onSubmitColor={addColor} />
    </>
  );

};
