import { axe, render } from '@/test-utils';
import { UsersTable } from './UsersTable';
import attributes from './attributes.json';

describe('UsersTable', () => {
  axe([<UsersTable key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UsersTable {...(attributes as any)} />);
  });
});
