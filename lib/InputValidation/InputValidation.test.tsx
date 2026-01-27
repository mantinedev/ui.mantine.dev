import { axe, render } from '@/test-utils';
import { InputValidation } from './InputValidation';
import attributes from './attributes.json';

describe('InputValidation', () => {
  axe([<InputValidation key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<InputValidation {...(attributes as any)} />);
  });
});
