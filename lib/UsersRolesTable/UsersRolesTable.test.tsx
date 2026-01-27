import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { UsersRolesTable } from './UsersRolesTable';

describe('UsersRolesTable', () => {
  axe([<UsersRolesTable key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UsersRolesTable {...(attributes as any)} />);
  });
});
