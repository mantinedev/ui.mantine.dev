import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UsersStack } from './UsersStack';

describe('UsersStack', () => {
  axe([<UsersStack key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UsersStack {...(attributes as any)} />);
  });
});
