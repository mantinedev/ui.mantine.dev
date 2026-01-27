import { axe, render } from '@/test-utils';
import { UserButton } from './UserButton';
import attributes from './attributes.json';

describe('UserButton', () => {
  axe([<UserButton key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserButton {...(attributes as any)} />);
  });
});
