import { axe, render } from '@/test-utils';
import { UsersRolesTable } from './UsersRolesTable';
import attributes from './attributes.json';

describe('UsersRolesTable', () => {
  axe([<UsersRolesTable key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<UsersRolesTable {...(attributes as any)} />);
  });
});
