import { axe, render } from '@/test-utils';
import { UserMenu } from './UserMenu';
import attributes from './attributes.json';

describe('UserMenu', () => {
  axe([<UserMenu key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserMenu {...(attributes as any)} />);
  });
});
