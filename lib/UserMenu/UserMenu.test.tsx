import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UserMenu } from './UserMenu';

describe('UserMenu', () => {
  axe([<UserMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserMenu {...(attributes as any)} />);
  });
});
