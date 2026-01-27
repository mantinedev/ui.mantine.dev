import { axe, render } from '@/test-utils';
import { SliderIcon } from './SliderIcon';
import attributes from './attributes.json';

describe('SliderIcon', () => {
  axe([<SliderIcon key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderIcon {...(attributes as any)} />);
  });
});
