import { axe, render } from '@/test-utils';
import { SliderWhite } from './SliderWhite';
import attributes from './attributes.json';

describe('SliderWhite', () => {
  axe([<SliderWhite key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderWhite {...(attributes as any)} />);
  });
});
