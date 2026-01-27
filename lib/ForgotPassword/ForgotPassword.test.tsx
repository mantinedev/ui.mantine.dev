import { axe, render } from '@/test-utils';
import { ForgotPassword } from './ForgotPassword';
import attributes from './attributes.json';

describe('ForgotPassword', () => {
  axe([<ForgotPassword key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ForgotPassword {...(attributes as any)} />);
  });
});
