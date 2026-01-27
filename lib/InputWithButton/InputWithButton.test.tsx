import { axe, render } from '@/test-utils';
import { InputWithButton } from './InputWithButton';
import attributes from './attributes.json';

describe('InputWithButton', () => {
  axe([<InputWithButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<InputWithButton {...(attributes as any)} />);
  });
});
