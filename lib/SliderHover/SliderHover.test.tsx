import { axe, render } from '@/test-utils';
import { SliderHover } from './SliderHover';
import attributes from './attributes.json';

describe('SliderHover', () => {
  axe([<SliderHover key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderHover {...(attributes as any)} />);
  });
});
