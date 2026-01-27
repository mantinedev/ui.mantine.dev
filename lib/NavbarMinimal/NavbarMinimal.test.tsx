import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarMinimal } from './NavbarMinimal';

describe('NavbarMinimal', () => {
  axe([<NavbarMinimal key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarMinimal {...(attributes as any)} />);
  });
});
