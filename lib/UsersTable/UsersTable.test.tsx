import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UsersTable } from './UsersTable';

describe('UsersTable', () => {
  axe([<UsersTable key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UsersTable {...(attributes as any)} />);
  });
});
