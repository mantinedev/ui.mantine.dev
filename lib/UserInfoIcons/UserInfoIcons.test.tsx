import { axe, render } from '@/test-utils';
import { UserInfoIcons } from './UserInfoIcons';
import attributes from './attributes.json';

describe('UserInfoIcons', () => {
  axe([<UserInfoIcons key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserInfoIcons {...(attributes as any)} />);
  });
});
