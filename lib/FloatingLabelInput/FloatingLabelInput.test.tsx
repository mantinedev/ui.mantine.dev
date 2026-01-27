import { axe, render } from '@/test-utils';
import { FloatingLabelInput } from './FloatingLabelInput';
import attributes from './attributes.json';

describe('FloatingLabelInput', () => {
  axe([<FloatingLabelInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<FloatingLabelInput {...(attributes as any)} />);
  });
});
