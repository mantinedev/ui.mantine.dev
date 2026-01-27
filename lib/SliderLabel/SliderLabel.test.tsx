import { axe, render } from '@/test-utils';
import { SliderLabel } from './SliderLabel';
import attributes from './attributes.json';

describe('SliderLabel', () => {
  axe([<SliderLabel key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderLabel {...(attributes as any)} />);
  });
});
