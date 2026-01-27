import { axe, render } from '@/test-utils';
import { UsersStack } from './UsersStack';
import attributes from './attributes.json';

describe('UsersStack', () => {
  axe([<UsersStack key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UsersStack {...(attributes as any)} />);
  });
});
