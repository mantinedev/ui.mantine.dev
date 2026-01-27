import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SliderLabel } from './SliderLabel';

describe('SliderLabel', () => {
  axe([<SliderLabel key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderLabel {...(attributes as any)} />);
  });
});
