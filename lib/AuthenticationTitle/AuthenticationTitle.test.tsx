import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { AuthenticationTitle } from './AuthenticationTitle';

describe('AuthenticationTitle', () => {
  axe([<AuthenticationTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AuthenticationTitle {...(attributes as any)} />);
  });
});
