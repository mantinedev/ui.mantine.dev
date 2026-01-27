import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarSimpleColored } from './NavbarSimpleColored';

describe('NavbarSimpleColored', () => {
  axe([<NavbarSimpleColored key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSimpleColored {...(attributes as any)} />);
  });
});
