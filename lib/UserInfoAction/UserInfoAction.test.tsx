import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UserInfoAction } from './UserInfoAction';

describe('UserInfoAction', () => {
  axe([<UserInfoAction key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UserInfoAction {...(attributes as any)} />);
  });
});
