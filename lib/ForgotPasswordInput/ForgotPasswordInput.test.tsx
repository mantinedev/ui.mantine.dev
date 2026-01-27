import { axe, render } from '@/test-utils';
import { ForgotPasswordInput } from './ForgotPasswordInput';
import attributes from './attributes.json';

describe('ForgotPasswordInput', () => {
  axe([<ForgotPasswordInput key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ForgotPasswordInput {...(attributes as any)} />);
  });
});
