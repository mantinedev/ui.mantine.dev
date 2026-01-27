import { axe, render } from '@/test-utils';
import { NavbarMinimal } from './NavbarMinimal';
import attributes from './attributes.json';

describe('NavbarMinimal', () => {
  axe([<NavbarMinimal key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarMinimal {...(attributes as any)} />);
  });
});
