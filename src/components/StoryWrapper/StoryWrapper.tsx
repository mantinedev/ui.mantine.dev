import { ComponentPreview } from '../ComponentPreview/ComponentPreview';
import { CanvasAttributes } from '../../data';

interface StoryWrapperProps {
  attributes: CanvasAttributes;
  component: React.FC<any>;
}

export function StoryWrapper({ attributes, component: Component }: StoryWrapperProps) {
  return (
    <ComponentPreview canvas={attributes.canvas} withSpacing>
      <Component {...(attributes.props || null)} />
    </ComponentPreview>
  );
}
