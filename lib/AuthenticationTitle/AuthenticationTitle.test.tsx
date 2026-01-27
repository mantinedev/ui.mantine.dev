import { axe, render } from '@/test-utils';
import { AuthenticationTitle } from './AuthenticationTitle';
import attributes from './attributes.json';

describe('AuthenticationTitle', () => {
  axe([<AuthenticationTitle key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AuthenticationTitle {...(attributes as any)} />);
  });
});
