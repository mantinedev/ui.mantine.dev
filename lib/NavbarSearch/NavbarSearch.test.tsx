import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarSearch } from './NavbarSearch';

describe('NavbarSearch', () => {
  axe([<NavbarSearch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSearch {...(attributes as any)} />);
  });
});
