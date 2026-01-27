import { axe, render } from '@/test-utils';
import { NavbarSimple } from './NavbarSimple';
import attributes from './attributes.json';

describe('NavbarSimple', () => {
  axe([<NavbarSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSimple {...(attributes as any)} />);
  });
});
