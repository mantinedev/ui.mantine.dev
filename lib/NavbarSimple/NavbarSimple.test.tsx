import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarSimple } from './NavbarSimple';

describe('NavbarSimple', () => {
  axe([<NavbarSimple key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSimple {...(attributes as any)} />);
  });
});
