import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { FloatingLabelInput } from './FloatingLabelInput';

describe('FloatingLabelInput', () => {
  axe([<FloatingLabelInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FloatingLabelInput {...(attributes as any)} />);
  });
});
