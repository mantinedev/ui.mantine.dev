import { axe, render } from '@/test-utils';
import { SliderInput } from './SliderInput';
import attributes from './attributes.json';

describe('SliderInput', () => {
  axe([<SliderInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<SliderInput {...(attributes as any)} />);
  });
});
