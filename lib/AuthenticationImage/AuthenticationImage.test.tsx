import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { AuthenticationImage } from './AuthenticationImage';

describe('AuthenticationImage', () => {
  axe([<AuthenticationImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AuthenticationImage {...(attributes as any)} />);
  });
});
