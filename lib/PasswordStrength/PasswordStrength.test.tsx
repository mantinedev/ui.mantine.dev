import { axe, render } from '@/test-utils';
import { PasswordStrength } from './PasswordStrength';
import attributes from './attributes.json';

describe('PasswordStrength', () => {
  axe([<PasswordStrength key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<PasswordStrength {...(attributes as any)} />);
  });
});
