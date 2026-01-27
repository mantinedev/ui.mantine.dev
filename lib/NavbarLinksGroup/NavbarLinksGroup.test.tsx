import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarLinksGroup } from './NavbarLinksGroup';

describe('NavbarLinksGroup', () => {
  axe([<NavbarLinksGroup key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarLinksGroup {...(attributes as any)} />);
  });
});
