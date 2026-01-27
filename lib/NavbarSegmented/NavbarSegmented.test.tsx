import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { NavbarSegmented } from './NavbarSegmented';

describe('NavbarSegmented', () => {
  axe([<NavbarSegmented key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<NavbarSegmented {...(attributes as any)} />);
  });
});
