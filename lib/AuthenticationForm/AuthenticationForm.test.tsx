import { axe, render } from '@/test-utils';
import { AuthenticationForm } from './AuthenticationForm';
import attributes from './attributes.json';

describe('AuthenticationForm', () => {
  axe([<AuthenticationForm key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<AuthenticationForm {...(attributes as any)} />);
  });
});
