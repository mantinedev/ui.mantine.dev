import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UserInfoIcons } from './UserInfoIcons';

describe('UserInfoIcons', () => {
  axe([<UserInfoIcons key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserInfoIcons {...(attributes as any)} />);
  });
});
