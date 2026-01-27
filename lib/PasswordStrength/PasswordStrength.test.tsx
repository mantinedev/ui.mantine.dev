import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { PasswordStrength } from './PasswordStrength';

describe('PasswordStrength', () => {
  axe([<PasswordStrength key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<PasswordStrength {...(attributes as any)} />);
  });
});
