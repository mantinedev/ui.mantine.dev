import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { InputWithButton } from './InputWithButton';

describe('InputWithButton', () => {
  axe([<InputWithButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<InputWithButton {...(attributes as any)} />);
  });
});
