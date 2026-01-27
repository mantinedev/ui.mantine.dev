import { axe, render } from '@/test-utils';
import { NavbarSegmented } from './NavbarSegmented';
import attributes from './attributes.json';

describe('NavbarSegmented', () => {
  axe([<NavbarSegmented key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSegmented {...(attributes as any)} />);
  });
});
