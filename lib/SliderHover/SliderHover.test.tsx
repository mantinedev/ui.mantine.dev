import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SliderHover } from './SliderHover';

describe('SliderHover', () => {
  axe([<SliderHover key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderHover {...(attributes as any)} />);
  });
});
