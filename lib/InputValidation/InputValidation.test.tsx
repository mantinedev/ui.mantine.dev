import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { InputValidation } from './InputValidation';

describe('InputValidation', () => {
  axe([<InputValidation key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<InputValidation {...(attributes as any)} />);
  });
});
