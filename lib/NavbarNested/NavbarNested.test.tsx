import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarNested } from './NavbarNested';

describe('NavbarNested', () => {
  axe([<NavbarNested key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarNested {...(attributes as any)} />);
  });
});
