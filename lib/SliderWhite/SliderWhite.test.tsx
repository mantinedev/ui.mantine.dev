import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SliderWhite } from './SliderWhite';

describe('SliderWhite', () => {
  axe([<SliderWhite key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderWhite {...(attributes as any)} />);
  });
});
