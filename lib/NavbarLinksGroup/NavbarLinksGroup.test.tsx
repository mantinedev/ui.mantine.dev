import { axe, render } from '@/test-utils';
import { NavbarLinksGroup } from './NavbarLinksGroup';
import attributes from './attributes.json';

describe('NavbarLinksGroup', () => {
  axe([<NavbarLinksGroup key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarLinksGroup {...(attributes as any)} />);
  });
});
