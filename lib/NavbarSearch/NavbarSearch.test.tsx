import { axe, render } from '@/test-utils';
import { NavbarSearch } from './NavbarSearch';
import attributes from './attributes.json';

describe('NavbarSearch', () => {
  axe([<NavbarSearch key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSearch {...(attributes as any)} />);
  });
});
