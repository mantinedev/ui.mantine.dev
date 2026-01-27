import { axe, render } from '@/test-utils';
import { NavbarSimpleColored } from './NavbarSimpleColored';
import attributes from './attributes.json';

describe('NavbarSimpleColored', () => {
  axe([<NavbarSimpleColored key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSimpleColored {...(attributes as any)} />);
  });
});
