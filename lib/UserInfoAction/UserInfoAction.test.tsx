import { axe, render } from '@/test-utils';
import { UserInfoAction } from './UserInfoAction';
import attributes from './attributes.json';

describe('UserInfoAction', () => {
  axe([<UserInfoAction key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserInfoAction {...(attributes as any)} />);
  });
});
