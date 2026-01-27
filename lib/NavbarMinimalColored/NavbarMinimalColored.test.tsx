import { axe, render } from '@/test-utils';
import { NavbarMinimalColored } from './NavbarMinimalColored';
import attributes from './attributes.json';

describe('NavbarMinimalColored', () => {
  axe([<NavbarMinimalColored key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarMinimalColored {...(attributes as any)} />);
  });
});
