import { axe, render } from '@/test-utils';
import { AuthenticationImage } from './AuthenticationImage';
import attributes from './attributes.json';

describe('AuthenticationImage', () => {
  axe([<AuthenticationImage key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AuthenticationImage {...(attributes as any)} />);
  });
});
