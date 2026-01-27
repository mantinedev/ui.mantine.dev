import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ForgotPassword } from './ForgotPassword';

describe('ForgotPassword', () => {
  axe([<ForgotPassword key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ForgotPassword {...(attributes as any)} />);
  });
});
