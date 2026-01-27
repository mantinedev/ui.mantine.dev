import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ForgotPasswordInput } from './ForgotPasswordInput';

describe('ForgotPasswordInput', () => {
  axe([<ForgotPasswordInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ForgotPasswordInput {...(attributes as any)} />);
  });
});
