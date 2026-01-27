import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SliderIcon } from './SliderIcon';

describe('SliderIcon', () => {
  axe([<SliderIcon key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderIcon {...(attributes as any)} />);
  });
});
