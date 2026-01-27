import { axe, render } from '@/test-utils';
import { AuthenticationForm } from './AuthenticationForm';

describe('AuthenticationForm', () => {
  axe([<AuthenticationForm key="1" />]);

  it('renders correctly', () => {
    render(<AuthenticationForm />);
  });
});
