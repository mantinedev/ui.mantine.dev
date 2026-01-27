import { axe, render } from '@/test-utils';
import { NavbarNested } from './NavbarNested';
import attributes from './attributes.json';

describe('NavbarNested', () => {
  axe([<NavbarNested key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarNested {...(attributes as any)} />);
  });
});
