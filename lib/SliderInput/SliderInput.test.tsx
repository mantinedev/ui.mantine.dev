import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { SliderInput } from './SliderInput';

describe('SliderInput', () => {
  axe([<SliderInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderInput {...(attributes as any)} />);
  });
});
