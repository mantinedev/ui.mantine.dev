import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarMinimalColored } from './NavbarMinimalColored';

describe('NavbarMinimalColored', () => {
  axe([<NavbarMinimalColored key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarMinimalColored {...(attributes as any)} />);
  });
});
