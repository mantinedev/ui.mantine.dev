import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UserButton } from './UserButton';

describe('UserButton', () => {
  axe([<UserButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserButton {...(attributes as any)} />);
  });
});
